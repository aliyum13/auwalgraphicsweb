import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { servicesData } from '../../assets/assets'
import './Services.css'

const Services = () => (
  <section className='ag-services' id='services'>
    <div className='ag-services__header'>
      <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
        <span className='ag-services__label'>What We Do</span>
        <h2 className='ag-services__title'>Everything Your Brand Needs<br />in One Place</h2>
        <p className='ag-services__sub'>
          From concept to print, web to branding — we handle every creative need for your Nigerian business.
        </p>
      </motion.div>
    </div>

    <div className='ag-services__grid'>
      {servicesData.map((svc, i) => (
        <motion.div
          key={svc.id}
          className='ag-services__card'
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.5, delay: i * 0.08 }}
          viewport={{ once:true }}
        >
          <div className='ag-services__icon'>{svc.icon}</div>
          <h3 className='ag-services__card-title'>{svc.title}</h3>
          <p className='ag-services__card-desc'>{svc.description}</p>
          <Link to={`/services/${svc.id}`} className='ag-services__learn'>
            Learn More →
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Services