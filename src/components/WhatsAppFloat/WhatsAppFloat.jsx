import React from 'react'
import './WhatsAppFloat.css'

const WhatsAppFloat = ({ openPopup }) => (
  <>
    {/* Desktop floating button */}
    <div className='ag-wa-float'>
      <div className='ag-wa-float__tooltip'>Chat on WhatsApp 💬</div>
      <a
        href='https://wa.me/2349056314212'
        target='_blank'
        rel='noopener noreferrer'
        className='ag-wa-float__btn'
        aria-label='Chat on WhatsApp'
      >
        📱
      </a>
    </div>

    {/* Mobile sticky bottom bar */}
    <div className='ag-wa-float__mobile-bar'>
      <div className='ag-wa-float__mobile-inner'>
        <a
          href='https://wa.me/2349056314212'
          target='_blank'
          rel='noopener noreferrer'
          className='ag-wa-float__mobile-wa'
        >
          📱 WhatsApp
        </a>
        <button
          className='ag-wa-float__mobile-quote'
          onClick={openPopup}
        >
          👕 Order Now
        </button>
      </div>
    </div>
  </>
)

export default WhatsAppFloat