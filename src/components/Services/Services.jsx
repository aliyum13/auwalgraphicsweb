import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { servicesData } from '../../assets/assets'
import './Services.css'

const svc = servicesData[0]

const Services = () => (
  <section className='ag-services' id='services'>
    <div className='ag-services__header'>
      <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
        <span className='ag-services__label'>What We Do</span>
        <h2 className='ag-services__title'>Clothing Printing,<br />Done Properly</h2>
        <p className='ag-services__sub'>
          We focus on one thing: printing on shirts and clothing. Here is what we can print for you.
        </p>
      </motion.div>
    </div>

    <div className='ag-services__grid'>
      {svc.products.map((item, i) => (
        <motion.div
          key={item.title}
          className='ag-services__card'
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.5, delay: i * 0.08 }}
          viewport={{ once:true }}
        >
          <div className='ag-services__icon'>{item.icon}</div>
          <h3 className='ag-services__card-title'>{item.title}</h3>
          <p className='ag-services__card-desc'>{item.description}</p>
          <Link to={`/services/${svc.id}`} className='ag-services__learn'>
            Learn More →
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Services