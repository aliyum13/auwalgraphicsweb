import React from 'react'
import { motion } from 'motion/react'
import toast from 'react-hot-toast'
import './ContactUs.css'

const WEB3_KEY = 'a5c57803-af0f-4f3f-8ce2-3ec02d41b2ac'  // ← paste your key here

const contactItems = [
  { icon:'📱', key:'WhatsApp',  val:'+234 906 781 6736',               href:'https://wa.me/2349067816736' },
  { icon:'📞', key:'Phone',     val:'+234 901 590 6190',               href:'tel:+2349015906190' },
  { icon:'✉️', key:'Email',     val:'auwalgraphicsinfo@gmail.com',      href:'mailto:auwalgraphicsinfo@gmail.com' },
  { icon:'📍', key:'Address',   val:'Wuse Zone 4, Fabdal Plaza Suite 211, Abuja', href:null },
  { icon:'📸', key:'Instagram', val:'@auwal.graphics',                  href:'https://instagram.com/auwal.graphics' },
]

const ContactUs = () => {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    formData.append('access_key', WEB3_KEY)
    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method:'POST', body:formData })
      const data = await res.json()
      if (data.success) { toast.success("Thank you! We'll contact you shortly. 🎉"); e.target.reset() }
      else              { toast.error(data.message) }
    } catch (err) { toast.error(err.message) }
  }

  return (
    <section className='ag-contact' id='contact-us'>

      {/* Header */}
      <div className='ag-contact__header'>
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
          <span className='ag-contact__label'>Get In Touch</span>
          <h2 className='ag-contact__title'>Start Your Project Today</h2>
          <p className='ag-contact__sub'>Fill in the form or reach us directly on WhatsApp. We respond within the hour.</p>
        </motion.div>
      </div>

      <div className='ag-contact__grid'>

        {/* LEFT — contact info */}
        <motion.div
          className='ag-contact__info-panel'
          initial={{ opacity:0, x:-30 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.6, delay:0.2 }}
          viewport={{ once:true }}
        >
          <h3 className='ag-contact__info-title'>Contact Details</h3>
          {contactItems.map(c => (
            <div key={c.key} className='ag-contact__info-item'>
              <div className='ag-contact__info-icon'>{c.icon}</div>
              <div>
                <div className='ag-contact__info-key'>{c.key}</div>
                <div className='ag-contact__info-val'>
                  {c.href ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel='noreferrer'>{c.val}</a> : c.val}
                </div>
              </div>
            </div>
          ))}
          <a href='https://wa.me/2349067816736' target='_blank' rel='noreferrer' className='ag-contact__wa-btn'>
            📱 Chat With Us on WhatsApp
          </a>
        </motion.div>

        {/* RIGHT — form */}
        <motion.form
          className='ag-contact__form'
          onSubmit={onSubmit}
          initial={{ opacity:0, x:30 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.6, delay:0.3 }}
          viewport={{ once:true }}
        >
          <div className='ag-contact__row'>
            <div className='ag-contact__field'>
              <label>Your Name</label>
              <input name='name' type='text' placeholder='e.g. Amina Bello' required />
            </div>
            <div className='ag-contact__field'>
              <label>Phone / WhatsApp</label>
              <input name='phone' type='tel' placeholder='+234 ...' />
            </div>
          </div>

          <div className='ag-contact__field'>
            <label>Email Address</label>
            <input name='email' type='email' placeholder='your@email.com' required />
          </div>

          <div className='ag-contact__field'>
            <label>Service Needed</label>
            <select name='service'>
              <option value=''>Select a service…</option>
              <option>Graphic Design</option>
              <option>Web Design</option>
              <option>Printing</option>
              <option>Branding</option>
              <option>Media Production</option>
              <option>Business Support</option>
              <option>Multiple Services</option>
            </select>
          </div>

          <div className='ag-contact__field'>
            <label>Project Details</label>
            <textarea name='message' placeholder='Tell us about your project, budget, and timeline…' required />
          </div>

          <button type='submit' className='ag-contact__submit'>
            Send Request 🚀
          </button>
        </motion.form>

      </div>
    </section>
  )
}

export default ContactUs