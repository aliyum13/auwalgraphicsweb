import React from 'react'
import { motion } from 'motion/react'
import './Hero.css'

const badges = ['Fast Delivery', 'Premium Quality', 'Abuja Based', 'Nationwide Service']

const Hero = ({ openPopup }) => (
  <div className='ag-hero' id='hero'>
    <div className='ag-hero__glow-1' />
    <div className='ag-hero__glow-2' />

    <div className='ag-hero__inner'>

      {/* ── LEFT ── */}
      <motion.div
        className='ag-hero__left'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className='ag-hero__eyebrow'>
          <span className='ag-hero__eyebrow-dot' />
          🇳🇬 Abuja's Premium Creative Agency
        </div>

        <h1 className='ag-hero__title'>
          We Design, Print &<br />
          <span className='highlight'>Build Brands</span><br />
          That Stand Out
        </h1>

        <p className='ag-hero__sub'>
          Helping Nigerian businesses grow with premium graphic design, professional
          printing, stunning websites, powerful branding, and strategic media solutions.
        </p>

        <div className='ag-hero__btns'>
          <button className='ag-hero__btn-primary' onClick={openPopup}>
            🚀 Get a Free Quote
          </button>
          <a className='ag-hero__btn-outline' href='/#portfolio'>
            View Portfolio →
          </a>
        </div>

        <p className='ag-hero__trust'>
          <span className='ag-hero__trust-check'>✓</span>
          Trusted by businesses, brands & entrepreneurs across Nigeria
        </p>
      </motion.div>

      {/* ── RIGHT ── */}
      <motion.div
        className='ag-hero__right'
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className='ag-hero__mockup-grid'>

          {/* Website mockup */}
          <div className='ag-hero__mockup-card web full'>
            <div>
              <div className='ag-hero__mock-bar' />
              <div className='ag-hero__mock-bar short' />
              <div className='ag-hero__mock-lines'>
                <div className='ag-hero__mock-line' />
                <div className='ag-hero__mock-line w60' />
                <div className='ag-hero__mock-line w40' />
              </div>
            </div>
            <p className='ag-hero__mock-label'>🌐 Website Design</p>
          </div>

          {/* Print mockup */}
          <div className='ag-hero__mockup-card print'>
            <div className='ag-hero__mock-icon'>👕</div>
            <p className='ag-hero__mock-label'>🖨️ Print & Merch</p>
          </div>

          {/* Social mockup */}
          <div className='ag-hero__mockup-card social'>
            <div className='ag-hero__mock-icon'>📲</div>
            <div>
              <div className='ag-hero__mock-stats'>
                <span className='ag-hero__mock-pill'>+2.4k</span>
                <span className='ag-hero__mock-pill'>Reach</span>
              </div>
              <p className='ag-hero__mock-label' style={{ marginTop: 6 }}>📊 Social Media</p>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className='ag-hero__badges'>
          {badges.map((b, i) => (
            <motion.div
              key={b}
              className='ag-hero__badge'
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            >
              <span className='ag-hero__badge-dot' />
              {b}
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
)

export default Hero