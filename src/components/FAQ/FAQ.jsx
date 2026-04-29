import React, { useState } from 'react'
import { motion } from 'motion/react'
import { faqData } from '../../assets/assets'
import './FAQ.css'

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <section className='ag-faq' id='faq'>
      <div className='ag-faq__header'>
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          viewport={{ once:true }}
        >
          <span className='ag-faq__label'>Common Questions</span>
          <h2 className='ag-faq__title'>Frequently Asked Questions</h2>
        </motion.div>
      </div>

      <div className='ag-faq__list'>
        {faqData.map((item, i) => (
          <motion.div
            key={i}
            className={`ag-faq__item${open === i ? ' open' : ''}`}
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.4, delay: i * 0.07 }}
            viewport={{ once:true }}
          >
            <button
              className='ag-faq__question'
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className='ag-faq__q-text'>{item.q}</span>
              <span className='ag-faq__toggle'>+</span>
            </button>
            <div className='ag-faq__answer'>
              <p className='ag-faq__a-text'>{item.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FAQ