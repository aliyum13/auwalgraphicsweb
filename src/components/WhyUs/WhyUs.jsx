import React from 'react'
import { motion } from 'motion/react'
import './WhyUs.css'

const points = [
  { icon:'✅', title:'Professional Designs That Convert',    desc:'We design for results — attracting customers and building trust, not just aesthetics.' },
  { icon:'⚡', title:'Reliable & Fast Delivery',             desc:'Deadlines are sacred. We deliver quality work on time, every time — no excuses.' },
  { icon:'💰', title:'Affordable Premium Quality',           desc:'World-class design quality at Nigerian pricing — maximum value for every naira.' },
  { icon:'🏢', title:'One Vendor for All Your Needs',        desc:'Design, print, web, branding — stop juggling vendors. We handle everything here.' },
  { icon:'🇳🇬', title:'Deep Nigerian Market Understanding',  desc:'We understand the Nigerian market and customer psychology — visuals that resonate.' },
  { icon:'💬', title:'Fast Response & Communication',        desc:'WhatsApp-ready, responsive team. We keep you informed at every project stage.' },
]

const WhyUs = () => (
  <section className='ag-whyus' id='why-us'>
    <div className='ag-whyus__inner'>

      {/* LEFT — branded panel with logo */}
      <motion.div
        className='ag-whyus__panel'
        initial={{ opacity:0, x:-30 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.7 }}
        viewport={{ once:true }}
      >
        <div className='ag-whyus__panel-bg' />

        {/* Logo */}
        <div className='ag-whyus__logo-wrap'>
          {/* Replace with <img src='/logo-white.png' alt='...' style={{height:48}} /> when ready */}
          <div className='ag-whyus__logo-text'>
            <span className='blue-part'>Auwal</span>Graphics
          </div>
          <p className='ag-whyus__logo-sub'>Premium Creative Agency · Abuja, Nigeria</p>
        </div>

        {/* Tagline */}
        <div className='ag-whyus__tagline'>
          <div className='ag-whyus__tagline-line' />
          <p>Helping Nigerian businesses grow through world-class design.</p>
        </div>

        {/* Stats */}
        <div className='ag-whyus__stats'>
          {[['200+','Projects Done'],['100+','Happy Clients'],['5★','Avg Rating'],['Fast','Turnaround']].map(([n,l]) => (
            <div key={l} className='ag-whyus__stat'>
              <span className='ag-whyus__stat-num'>{n}</span>
              <span className='ag-whyus__stat-lbl'>{l}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — reasons */}
      <motion.div
        className='ag-whyus__right'
        initial={{ opacity:0, x:30 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.7 }}
        viewport={{ once:true }}
      >
        <span className='ag-whyus__label'>Why Choose Us</span>
        <h2 className='ag-whyus__title'>Why Businesses Choose<br />Auwal Graphics</h2>

        <div className='ag-whyus__points'>
          {points.map((p, i) => (
            <motion.div
              key={i}
              className='ag-whyus__point'
              initial={{ opacity:0, y:15 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.4, delay: i*0.07 }}
              viewport={{ once:true }}
            >
              <div className='ag-whyus__point-icon'>{p.icon}</div>
              <div>
                <div className='ag-whyus__point-title'>{p.title}</div>
                <div className='ag-whyus__point-desc'>{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
)

export default WhyUs