import React from 'react'
import { motion } from 'motion/react'
import './CTABanner.css'

const CTABanner = ({ openPopup }) => (
  <section className='ag-cta'>
    <div className='ag-cta__pattern' />
    <motion.div
      className='ag-cta__inner'
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      transition={{ duration:0.7 }}
      viewport={{ once:true }}
    >
      <h2 className='ag-cta__title'>Got a Design? Let's Print It.</h2>
      <p className='ag-cta__sub'>
        Print on demand T-shirts, polos and hoodies — no minimum order,
        printed when you order, delivered within Abuja.
      </p>
      <div className='ag-cta__btns'>
        <button onClick={openPopup} className='ag-cta__btn-wa' style={{ border:'none', cursor:'pointer', fontFamily:'inherit' }}>
          👕 Start Your Order
        </button>
        <a href='tel:+2349015906190' className='ag-cta__btn-call'>
          📞 Call Now
        </a>
      </div>
    </motion.div>
  </section>
)

export default CTABanner