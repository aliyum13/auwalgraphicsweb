import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'motion/react'
import '../Order/Order.css'
import './Track.css'

// n8n workflow "Auwal Graphics - Order Tracking" (production webhook).
const TRACK_WEBHOOK = import.meta.env.VITE_N8N_TRACK_WEBHOOK || 'https://muhammadauwal.app.n8n.cloud/webhook/auwal-track'
const WHATSAPP      = '2349056314212'

// Status values are typed by hand in the n8n orders table, so match loosely.
const STEPS = [
  { key: 'new',              label: 'Order received',   desc: 'We have your order and will confirm the price on WhatsApp.' },
  { key: 'confirmed',        label: 'Confirmed',        desc: 'Price agreed and deposit received.' },
  { key: 'in production',    label: 'Printing',         desc: 'Your items are being printed.' },
  { key: 'ready',            label: 'Ready',            desc: 'Printing is done and checked.' },
  { key: 'out for delivery', label: 'Out for delivery', desc: 'On the way to your address in Abuja.' },
  { key: 'delivered',        label: 'Delivered',        desc: 'Your order has been delivered. Thank you!' },
]

const normalise = (s) => String(s || '').toLowerCase().replace(/[^a-z ]/g, ' ').replace(/\s+/g, ' ').trim()
const stepIndex = (status) => {
  const s = normalise(status)
  if (s === 'printing' || s === 'production') return 2
  return STEPS.findIndex(st => st.key === s)
}

const fmtDate = (v) => {
  if (!v) return ''
  const d = new Date(v)
  return isNaN(d) ? v : d.toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })
}

const Track = () => {
  const [params] = useSearchParams()
  const [code, setCode]       = useState(params.get('code') || '')
  const [phone, setPhone]     = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult]   = useState(null)   // { found, ... }
  const [error, setError]     = useState('')

  useEffect(() => { setResult(null); setError('') }, [code, phone])

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setError(''); setResult(null)
    try {
      const url = `${TRACK_WEBHOOK}?order_id=${encodeURIComponent(code.trim())}&phone=${encodeURIComponent(phone.trim())}`
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setResult(await res.json())
    } catch {
      setError("We couldn't check your order right now. Please try again in a minute, or message us on WhatsApp.")
    } finally {
      setLoading(false)
    }
  }

  const idx       = result?.found ? stepIndex(result.status) : -1
  const cancelled = result?.found && normalise(result.status) === 'cancelled'

  return (
    <div className='ag-order page-enter'>
      <div className='ag-order__header'>
        <span className='ag-order__label'>Order Tracking</span>
        <h1 className='ag-order__title'>Track Your Order</h1>
        <p className='ag-order__sub'>
          Enter the order code you received (it looks like <strong>AG-261124-ABCD</strong>) and the phone number you ordered with.
        </p>
      </div>

      <form className='ag-order__form' onSubmit={onSubmit}>
        <section className='ag-order__card'>
          <div className='ag-order__row'>
            <div>
              <label className='ag-order__field-label'>Order code</label>
              <input className='ag-order__input' value={code} onChange={e => setCode(e.target.value)}
                placeholder='AG-261124-ABCD' required autoCapitalize='characters' />
            </div>
            <div>
              <label className='ag-order__field-label'>Phone number</label>
              <input className='ag-order__input' type='tel' value={phone} onChange={e => setPhone(e.target.value)}
                placeholder='0803 000 0000' required />
            </div>
          </div>
          <button type='submit' className='ag-order__submit' disabled={loading}>
            {loading ? 'Checking…' : 'Track Order →'}
          </button>
        </section>

        {error && <p className='ag-track__msg ag-track__msg--error'>{error}</p>}

        {result && !result.found && (
          <p className='ag-track__msg ag-track__msg--error'>
            We couldn't find an order with that code and phone number. Check the code, use the same phone
            number you ordered with, or <a href={`https://wa.me/${WHATSAPP}`} target='_blank' rel='noreferrer'>message us on WhatsApp</a>.
          </p>
        )}

        {result?.found && (
          <motion.section className='ag-order__card' initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}>
            <div className='ag-track__head'>
              <div>
                <div className='ag-track__code'>{result.order_id}</div>
                <div className='ag-track__item'>
                  {result.total_quantity} × {result.product}{result.colour ? ` · ${result.colour}` : ''}
                  {result.print_position ? ` · ${result.print_position}` : ''}
                </div>
              </div>
              <span className={`ag-track__badge${cancelled ? ' cancelled' : ''}`}>{result.status}</span>
            </div>

            {cancelled ? (
              <p className='ag-track__msg'>This order was cancelled. Message us on WhatsApp if you have any questions.</p>
            ) : (
              <ol className='ag-track__steps'>
                {STEPS.map((st, i) => {
                  const state = idx < 0 ? (i === 0 ? 'current' : 'todo') : i < idx ? 'done' : i === idx ? 'current' : 'todo'
                  return (
                    <li key={st.key} className={`ag-track__step ${state}`}>
                      <span className='ag-track__dot'>{state === 'done' ? '✓' : i + 1}</span>
                      <div>
                        <div className='ag-track__step-label'>{st.label}</div>
                        {state === 'current' && <div className='ag-track__step-desc'>{st.desc}</div>}
                      </div>
                    </li>
                  )
                })}
              </ol>
            )}

            <div className='ag-track__meta'>
              {result.submitted_at && <span>Ordered: {fmtDate(result.submitted_at)}</span>}
              {result.deadline && <span>Needed by: {fmtDate(result.deadline)}</span>}
              {result.updated_at && <span>Last update: {fmtDate(result.updated_at)}</span>}
            </div>

            <a className='ag-order__btn-primary ag-track__wa'
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I'm asking about order ${result.order_id}`)}`}
              target='_blank' rel='noreferrer'>
              📱 Ask About This Order
            </a>
          </motion.section>
        )}

        <p className='ag-order__note'>Want to place a new order? <Link to='/order'>Start here</Link>.</p>
      </form>
    </div>
  )
}

export default Track
