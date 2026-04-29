import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { portfolioData } from '../../assets/assets'
import './Portfolio.css'

const cats = ['All','Branding','Graphic Design','Web Design','Print Design','Packaging']

const Portfolio = () => {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? portfolioData : portfolioData.filter(p => p.category === active)

  return (
    <section className='ag-portfolio' id='portfolio'>
      <div className='ag-portfolio__header'>
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
          <span className='ag-portfolio__label'>Our Work</span>
          <h2 className='ag-portfolio__title'>Creative Work That Delivers Results</h2>
          <p className='ag-portfolio__sub'>Real projects for real Nigerian businesses — see how we've helped brands stand out and grow.</p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className='ag-portfolio__filters'>
        {cats.map(c => (
          <button
            key={c}
            className={`ag-portfolio__filter-btn${active===c?' active':''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
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
        <a href='/#contact-us' className='ag-portfolio__cta-link'>Start Your Project →</a>
      </div>
    </section>
  )
}

export default Portfolio