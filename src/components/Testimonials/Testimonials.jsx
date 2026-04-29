import React from 'react'
import { motion } from 'motion/react'
import { testimonialsData } from '../../assets/assets'
import './Testimonials.css'

const Testimonials = () => (
  <section className='ag-testi'>
    <div className='ag-testi__header'>
      <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
        <span className='ag-testi__label'>Client Reviews</span>
        <h2 className='ag-testi__title'>What Our Clients Say</h2>
        <p className='ag-testi__sub'>Hundreds of Nigerian businesses trust Auwal Graphics. Here's what they have to say.</p>
      </motion.div>
    </div>

    <div className='ag-testi__grid'>
      {testimonialsData.map((t,i) => (
        <motion.div key={i} className='ag-testi__card'
          initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }}
          transition={{ duration:0.5, delay:i*0.12 }} viewport={{ once:true }}>
          <span className='ag-testi__quote-mark'>"</span>
          <div className='ag-testi__stars'>
            {[1,2,3,4,5].map(s => <span key={s} className='ag-testi__star'>★</span>)}
          </div>
          <p className='ag-testi__text'>"{t.text}"</p>
          <div className='ag-testi__author'>
            <div className='ag-testi__avatar'>{t.initials}</div>
            <div>
              <div className='ag-testi__name'>{t.name}</div>
              <div className='ag-testi__biz'>{t.business}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Testimonials