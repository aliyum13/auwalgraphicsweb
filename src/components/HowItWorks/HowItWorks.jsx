import React from 'react'
import { motion } from 'motion/react'
import './HowItWorks.css'

const steps = [
  { icon:'💬', num:'Step 01', title:'Tell Us What You Need',  desc:'Contact us via WhatsApp, phone, or quote form. Tell us your project, timeline and budget. We respond fast with a clear plan and price.' },
  { icon:'🎨', num:'Step 02', title:'We Design & Produce',    desc:'Our creative team gets to work immediately. We send drafts, make revisions, and ensure you are 100% satisfied before we finalise.' },
  { icon:'🚀', num:'Step 03', title:'You Receive & Grow',     desc:'Get your files, printed materials, or live website. Watch your brand attract more customers, build trust, and grow faster.' },
]

const HowItWorks = () => (
  <section className='ag-how'>
    <div className='ag-how__header'>
      <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
        <span className='ag-how__label'>Our Process</span>
        <h2 className='ag-how__title'>Simple Process. Serious Results.</h2>
        <p className='ag-how__sub'>Three steps to a brand that stands out and a business that grows.</p>
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