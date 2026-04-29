import React from 'react'
import toast from 'react-hot-toast'
import './QuotePopup.css'

const QuotePopup = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Thank you! We'll contact you shortly via WhatsApp 🎉")
    onClose()
    e.target.reset()
  }

  return (
    <div
      className={`ag-popup__overlay${isOpen ? ' open' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className='ag-popup__box'>
        <button className='ag-popup__close' onClick={onClose}>✕</button>

        <h3 className='ag-popup__title'>Get Your Free Quote</h3>
        <p className='ag-popup__sub'>Tell us about your project and we'll respond within the hour.</p>

        <form className='ag-popup__form' onSubmit={handleSubmit}>
          <input type='text'  placeholder='Your Name'              required />
          <input type='tel'   placeholder='WhatsApp / Phone Number' required />
          <select>
            <option value=''>Service Needed…</option>
            <option>Graphic Design</option>
            <option>Web Design</option>
            <option>Printing</option>
            <option>Branding</option>
            <option>Media Production</option>
            <option>Business Support</option>
            <option>Multiple Services</option>
          </select>
          <textarea placeholder='Brief project description…' />
          <button type='submit' className='ag-popup__submit'>Send Request →</button>
        </form>
      </div>
    </div>
  )
}

export default QuotePopup