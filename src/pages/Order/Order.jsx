import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import toast from 'react-hot-toast'
import './Order.css'

// ── n8n ──────────────────────────────────────────────────────────
// Set VITE_N8N_ORDER_WEBHOOK (Render → Environment) to your n8n
// Webhook node's production URL. Orders are POSTed there as
// multipart/form-data (see README → "Order automation with n8n").
// If it's not set, or the request fails, the order opens in WhatsApp.
const N8N_WEBHOOK = import.meta.env.VITE_N8N_ORDER_WEBHOOK || ''
const WHATSAPP    = '2349056314212'

const PRODUCTS  = ['T-Shirt', 'Polo Shirt', 'Hoodie', 'Sweatshirt', 'Long-Sleeve T-Shirt', 'Cap', 'Other']
const COLOURS   = ['White', 'Black', 'Navy', 'Grey', 'Red', 'Other']
const SIZES     = ['S', 'M', 'L', 'XL', 'XXL', '3XL']
const CAP_SIZES = ['One size']
const PRINT_SPOTS = ['Front', 'Side', 'Back']
const MAX_FILE_MB = 10
const MAX_FILES   = 5

const makeOrderId = () => {
  const d = new Date()
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `AG-${ymd}-${rand}`
}

const emptySizes = Object.fromEntries([...SIZES, ...CAP_SIZES].map(s => [s, 0]))

const Order = () => {
  const [product, setProduct]   = useState(PRODUCTS[0])
  const [colour, setColour]     = useState(COLOURS[0])
  const [sizes, setSizes]       = useState(emptySizes)
  const [spots, setSpots]       = useState(['Front'])
  const [files, setFiles]       = useState([])
  const [needsDesign, setNeeds] = useState(false)
  const [sending, setSending]   = useState(false)
  const [doneId, setDoneId]     = useState(null)

  // Show the confirmation (with the order number) from the top
  useEffect(() => { if (doneId) window.scrollTo({ top: 0, behavior: 'smooth' }) }, [doneId])

  const isCap     = product === 'Cap'
  const sizeList  = isCap ? CAP_SIZES : SIZES
  // e.g. "Front", "Front & Back", "Front, Side & Back"
  const position  = (() => {
    const list = PRINT_SPOTS.filter(x => spots.includes(x))
    return list.length < 2 ? (list[0] || '') : `${list.slice(0, -1).join(', ')} & ${list[list.length - 1]}`
  })()
  const toggleSpot = (x) =>
    setSpots(prev => prev.includes(x) ? prev.filter(y => y !== x) : [...prev, x])

  const totalQty = useMemo(() => sizeList.reduce((a, s) => a + (sizes[s] || 0), 0), [sizes, sizeList])

  const setSizeQty = (s, value) => {
    const n = parseInt(value, 10)
    setSizes(prev => ({ ...prev, [s]: Number.isFinite(n) && n > 0 ? Math.min(n, 100000) : 0 }))
  }

  const chooseProduct = (p) => setProduct(p)

  const onFile = (e) => {
    const picked = Array.from(e.target.files || [])
    const tooBig = picked.find(f => f.size > MAX_FILE_MB * 1024 * 1024)
    if (tooBig) {
      toast.error(`${tooBig.name} is over ${MAX_FILE_MB}MB. Please send a smaller file or share it on WhatsApp.`)
      e.target.value = ''
      return
    }
    if (picked.length > MAX_FILES) toast.error(`Only the first ${MAX_FILES} files will be sent.`)
    setFiles(picked.slice(0, MAX_FILES))
  }
  const fileNames = files.map(f => f.name).join(', ')

  const buildSummary = (orderId, f, viaWhatsApp) => {
    const sizeLine = sizeList.filter(s => sizes[s] > 0).map(s => `${s} x ${sizes[s]}`).join(', ')
    return [
      `New print on demand order ${orderId}`,
      `Item: ${product}${f.get('product_other') ? ` (${f.get('product_other')})` : ''}`,
      `Colour: ${colour}${f.get('colour_other') ? ` (${f.get('colour_other')})` : ''}`,
      `${isCap ? 'Quantity' : 'Sizes'}: ${sizeLine} (total ${totalQty})`,
      `Print: ${position}`,
      `Design: ${files.length ? `${fileNames}${viaWhatsApp ? ' (sending in chat)' : ' (attached)'}` : 'none uploaded'}${needsDesign ? ' - needs design help' : ''}`,
      f.get('design_notes') ? `Notes: ${f.get('design_notes')}` : null,
      `Delivery (Abuja): ${f.get('address')}`,
      f.get('deadline') ? `Needed by: ${f.get('deadline')}` : null,
      `Name: ${f.get('name')}`,
      `Phone: ${f.get('phone')}`,
      f.get('email') ? `Email: ${f.get('email')}` : null,
    ].filter(Boolean).join('\n')
  }

  const sendToWhatsApp = (summary) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(summary)}`, '_blank', 'noopener')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!spots.length) { toast.error('Choose where to print: front, side or back.'); return }
    if (totalQty < 1) { toast.error(isCap ? 'Enter how many caps.' : 'Add at least one size.'); return }
    if (!files.length && !needsDesign && !e.target.design_notes.value.trim()) {
      toast.error('Upload your design, describe it, or tick "I need design help".')
      return
    }

    const form    = new FormData(e.target)
    const orderId = makeOrderId()
    const summary   = buildSummary(orderId, form, false)
    const waSummary = buildSummary(orderId, form, true)

    const payload = new FormData()
    payload.append('order_id', orderId)
    payload.append('submitted_at', new Date().toISOString())
    payload.append('product', product)
    payload.append('product_other', form.get('product_other') || '')
    payload.append('colour', colour)
    payload.append('colour_other', form.get('colour_other') || '')
    payload.append('sizes', JSON.stringify(Object.fromEntries(sizeList.filter(s => sizes[s] > 0).map(s => [s, sizes[s]]))))
    payload.append('total_quantity', String(totalQty))
    payload.append('print_position', position)
    payload.append('needs_design_help', needsDesign ? 'yes' : 'no')
    payload.append('design_notes', form.get('design_notes') || '')
    payload.append('delivery_method', 'Delivery within Abuja')
    payload.append('delivery_address', form.get('address') || '')
    payload.append('deadline', form.get('deadline') || '')
    payload.append('customer_name', form.get('name') || '')
    payload.append('customer_phone', form.get('phone') || '')
    payload.append('customer_email', form.get('email') || '')
    payload.append('summary', summary)
    payload.append('design_file_count', String(files.length))
    files.forEach((f, i) => payload.append(`design_file_${i + 1}`, f, f.name))

    if (!N8N_WEBHOOK) {
      sendToWhatsApp(waSummary)
      setDoneId(orderId)
      return
    }

    setSending(true)
    try {
      const res = await fetch(N8N_WEBHOOK, { method: 'POST', body: payload })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setDoneId(orderId)
      e.target.reset()
      setSizes(emptySizes); setFiles([]); setNeeds(false)
    } catch {
      toast.error("We couldn't send your order online, so we've opened WhatsApp instead.")
      sendToWhatsApp(waSummary)
      setDoneId(orderId)
    } finally {
      setSending(false)
    }
  }

  if (doneId) {
    return (
      <div className='ag-order page-enter'>
        <motion.div className='ag-order__done' initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
          <div className='ag-order__done-icon'>✅</div>
          <h1>Order received</h1>
          <p>Your order number is</p>
          <div className='ag-order__done-id'>{doneId}</div>
          <p>
            We'll confirm your order and price on WhatsApp. Nothing is printed until you confirm and pay.
            {!N8N_WEBHOOK && ' If WhatsApp opened, press send so we receive your order, and attach your design there.'}
          </p>
          <div className='ag-order__done-btns'>
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I just placed order ${doneId}`)}`} target='_blank' rel='noreferrer' className='ag-order__btn-primary'>
              📱 Message Us About This Order
            </a>
            <button className='ag-order__btn-ghost' onClick={() => setDoneId(null)}>Place Another Order</button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className='ag-order page-enter'>
      <div className='ag-order__header'>
        <span className='ag-order__label'>Print on Demand</span>
        <h1 className='ag-order__title'>Start Your Order</h1>
        <p className='ag-order__sub'>
          Pick your clothing, add sizes and upload your design. We confirm the price on WhatsApp
          before anything is printed. No minimum order.
        </p>
      </div>

      <form className='ag-order__form' onSubmit={onSubmit}>

        {/* 1. Item */}
        <section className='ag-order__card'>
          <h2><span>1</span> Choose your item</h2>
          <div className='ag-order__chips'>
            {PRODUCTS.map(p => (
              <button type='button' key={p} className={`ag-order__chip${product === p ? ' active' : ''}`} onClick={() => chooseProduct(p)}>{p}</button>
            ))}
          </div>
          {product === 'Other' && <input name='product_other' className='ag-order__input' placeholder='What item?' required />}

          <label className='ag-order__field-label'>Colour</label>
          <div className='ag-order__chips'>
            {COLOURS.map(c => (
              <button type='button' key={c} className={`ag-order__chip${colour === c ? ' active' : ''}`} onClick={() => setColour(c)}>{c}</button>
            ))}
          </div>
          {colour === 'Other' && <input name='colour_other' className='ag-order__input' placeholder='Which colour?' required />}
        </section>

        {/* 2. Sizes */}
        <section className='ag-order__card'>
          <h2><span>2</span> {isCap ? 'Quantity' : 'Sizes & quantity'}</h2>
          <p className='ag-order__help'>Type how many you need{isCap ? '' : ' in each size'}.</p>
          <div className='ag-order__sizes'>
            {sizeList.map(s => (
              <div key={s} className='ag-order__size'>
                <div className='ag-order__size-name'>{s}</div>
                <input className='ag-order__qty' type='number' min='0' inputMode='numeric'
                  value={sizes[s] || ''} placeholder='0'
                  onChange={e => setSizeQty(s, e.target.value)} aria-label={`Quantity ${s}`} />
              </div>
            ))}
          </div>
          <p className='ag-order__total'>Total: <strong>{totalQty}</strong> {totalQty === 1 ? 'piece' : 'pieces'}</p>
        </section>

        {/* 3. Design */}
        <section className='ag-order__card'>
          <h2><span>3</span> Your design</h2>
          <label className='ag-order__field-label'>Where to print (choose one or more)</label>
          <div className='ag-order__chips'>
            {PRINT_SPOTS.map(x => (
              <button type='button' key={x} aria-pressed={spots.includes(x)} className={`ag-order__chip${spots.includes(x) ? ' active' : ''}`} onClick={() => toggleSpot(x)}>
                {spots.includes(x) ? '✓ ' : ''}{x}
              </button>
            ))}
          </div>

          <label className='ag-order__upload'>
            <input type='file' multiple accept='image/*,.pdf,.ai,.eps,.svg,.psd' onChange={onFile} />
            <span className='ag-order__upload-icon'>⬆️</span>
            <span>{files.length ? fileNames : `Upload your design — up to ${MAX_FILES} files (PNG, JPG, PDF, AI, SVG, max ${MAX_FILE_MB}MB each)`}</span>
          </label>

          <label className='ag-order__check'>
            <input type='checkbox' checked={needsDesign} onChange={e => setNeeds(e.target.checked)} />
            I need design help — I'll describe my idea
          </label>

          <textarea name='design_notes' className='ag-order__input' rows={3}
            placeholder='Describe your design or give instructions (text to print, colours, logo placement…)' />
        </section>

        {/* 4. Delivery & contact */}
        <section className='ag-order__card'>
          <h2><span>4</span> Delivery & contact</h2>
          <p className='ag-order__hint'>📍 We currently deliver within Abuja (FCT) only. More locations coming soon.</p>
          <label className='ag-order__field-label'>Delivery address in Abuja</label>
          <textarea name='address' className='ag-order__input' rows={2} placeholder='Street, area (e.g. Wuse 2, Gwarinpa, Kubwa)' required />

          <div className='ag-order__row'>
            <div>
              <label className='ag-order__field-label'>Your name</label>
              <input name='name' className='ag-order__input' placeholder='e.g. Amina Bello' required />
            </div>
            <div>
              <label className='ag-order__field-label'>WhatsApp number</label>
              <input name='phone' type='tel' className='ag-order__input' placeholder='+234 …' required />
            </div>
          </div>
          <div className='ag-order__row'>
            <div>
              <label className='ag-order__field-label'>Email (optional)</label>
              <input name='email' type='email' className='ag-order__input' placeholder='you@email.com' />
            </div>
            <div>
              <label className='ag-order__field-label'>Needed by (optional)</label>
              <input name='deadline' type='date' className='ag-order__input' />
            </div>
          </div>
        </section>

        <button type='submit' className='ag-order__submit' disabled={sending}>
          {sending ? 'Sending your order…' : `Send Order${totalQty ? ` (${totalQty} ${totalQty === 1 ? 'piece' : 'pieces'})` : ''} →`}
        </button>
        <p className='ag-order__note'>
          You won't be charged now. We'll confirm the price on WhatsApp first.
          Questions? <Link to='/#contact-us'>Contact us</Link>.
        </p>
      </form>
    </div>
  )
}

export default Order
