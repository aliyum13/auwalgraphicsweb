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
      <h2 className='ag-cta__title'>Ready to Upgrade Your Brand?</h2>
      <p className='ag-cta__sub'>
        Get professional design, print, and web solutions that help your Nigerian
        business grow, attract customers, and build lasting trust.
      </p>
      <div className='ag-cta__btns'>
        <a href='https://wa.me/2349067816736' target='_blank' rel='noreferrer' className='ag-cta__btn-wa'>
          📱 Request Quote on WhatsApp
        </a>
        <a href='tel:+2349015906190' className='ag-cta__btn-call'>
          📞 Call Now
        </a>
      </div>
    </motion.div>
  </section>
)

export default CTABanner