import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { portfolioData } from '../../assets/assets'
import './Portfolio.css'

const Portfolio = () => {
  const items = portfolioData

  return (
    <section className='ag-portfolio' id='portfolio'>
      <div className='ag-portfolio__header'>
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
          <span className='ag-portfolio__label'>Our Work</span>
          <h2 className='ag-portfolio__title'>Clothing We've Printed</h2>
          <p className='ag-portfolio__sub'>Real orders for real Nigerian brands, teams and events.</p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className='ag-portfolio__grid'>
        {items.map((p,i) => (
          <motion.div key={p.id} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.5, delay:i*0.08 }} viewport={{ once:true }}>
            <Link to={`/portfolio/${p.id}`} className='ag-portfolio__card'>
              <div className={`ag-portfolio__thumb bg-gradient-to-br ${p.gradient}`}>
                {p.icon}
                <div className='ag-portfolio__overlay'>
                  <span className='ag-portfolio__view-btn'>View Project →</span>
                </div>
              </div>
              <div className='ag-portfolio__info'>
                <span className='ag-portfolio__cat'>{p.category}</span>
                <div className='ag-portfolio__name'>{p.title}</div>
                <div className='ag-portfolio__client'>{p.client} · {p.industry}</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className='ag-portfolio__cta-wrap'>
        <a href='/#contact-us' className='ag-portfolio__cta-link'>Start Your Order →</a>
      </div>
    </section>
  )
}

export default Portfolio