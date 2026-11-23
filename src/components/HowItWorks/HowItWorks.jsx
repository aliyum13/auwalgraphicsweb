import React from 'react'
import { motion } from 'motion/react'
import './HowItWorks.css'

const steps = [
  { icon:'🛒', num:'Step 01', title:'Place Your Order',       desc:'Use our order page to pick the clothing, colour and sizes, and upload your design. No design? Tell us your idea.' },
  { icon:'🖨️', num:'Step 02', title:'Confirm & We Print',     desc:'We confirm your order and price on WhatsApp. Once you pay, your clothing is printed on demand, just for you.' },
  { icon:'🚚', num:'Step 03', title:'You Receive & Wear',     desc:'We deliver to your address within Abuja. Your team, event or customers wear your brand with pride.' },
]

const HowItWorks = () => (
  <section className='ag-how'>
    <div className='ag-how__header'>
      <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
        <span className='ag-how__label'>Our Process</span>
        <h2 className='ag-how__title'>Simple Process. Serious Results.</h2>
        <p className='ag-how__sub'>Three steps from your design to clothing in your hands.</p>
      </motion.div>
    </div>

    <div className='ag-how__steps'>
      {steps.map((s,i) => (
        <motion.div
          key={i}
          className='ag-how__step'
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.5, delay:i*0.15 }}
          viewport={{ once:true }}
        >
          <div className='ag-how__step-circle'>
            <span className='ag-how__step-icon'>{s.icon}</span>
          </div>
          <div className='ag-how__step-num'>{s.num}</div>
          <h3 className='ag-how__step-title'>{s.title}</h3>
          <p className='ag-how__step-desc'>{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

export default HowItWorks