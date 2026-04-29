import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { servicesData } from '../../assets/assets'
import './ServiceDetail.css'

const ServiceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const svc = servicesData.find(s => s.id === id)
  const others = servicesData.filter(s => s.id !== id).slice(0, 3)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!svc) return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16 }}>
      <h2>Service not found</h2>
      <Link to='/'>← Back to Home</Link>
    </div>
  )

  return (
    <div className='ag-svc-detail page-enter'>

      {/* ── HERO — background image via inline style ── */}
      <div
        className='ag-svc-detail__hero'
        style={{
          backgroundImage: svc.heroImage
            ? `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.88) 100%), url("${svc.heroImage}")`
            : 'linear-gradient(135deg, #0d1a4a, #2c459d)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Back button */}
        <div className='ag-svc-detail__back-wrap'>
          <button className='ag-svc-detail__back' onClick={() => navigate(-1)}>← Back</button>
        </div>

        {/* Hero content */}
        <motion.div
          className='ag-svc-detail__hero-content'
          initial={{ opacity:0, y:30 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
        >
          <div className='ag-svc-detail__hero-tag'>{svc.icon} Service</div>
          <h1 className='ag-svc-detail__hero-title'>{svc.title}</h1>
          <p className='ag-svc-detail__hero-tagline'>{svc.tagline}</p>
          <span className='ag-svc-detail__turnaround'>⏱ Turnaround: {svc.turnaround}</span>
        </motion.div>
      </div>

      <div className='ag-svc-detail__body'>

        {/* Overview + Includes */}
        <div className='ag-svc-detail__overview'>
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
            <span className='ag-svc-detail__section-label'>About This Service</span>
            <h2 className='ag-svc-detail__section-title'>What We Deliver</h2>
            <p className='ag-svc-detail__desc'>{svc.fullDescription}</p>
            <p className='ag-svc-detail__desc'>
              Whether you are a startup building from scratch, an established business looking to grow,
              or an organisation that needs professional creative support — our {svc.title.toLowerCase()} service
              is designed to deliver measurable results for your Nigerian business.
            </p>
          </motion.div>
          <motion.div
            className='ag-svc-detail__includes'
            initial={{ opacity:0,x:20 }} whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }} transition={{ duration:0.5, delay:0.2 }}
          >
            <h3>What is Included</h3>
            <ul>
              {svc.includes.map((item,i) => (
                <li key={i}>
                  <span className='ag-svc-detail__includes-check'>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <hr className='ag-svc-detail__includes-divider' />
            <a href='https://wa.me/2349067816736' target='_blank' rel='noreferrer' className='ag-svc-detail__quote-btn'>
              📱 Get a Quote Now
            </a>
          </motion.div>
        </div>

        {/* Gallery */}
        <div className='ag-svc-detail__gallery'>
          <span className='ag-svc-detail__section-label'>Sample Work</span>
          <h2 className='ag-svc-detail__section-title' style={{ marginBottom:28 }}>Work Examples</h2>
          <div className='ag-svc-detail__gallery-grid'>
            {svc.gallery.map((img,i) => (
              <motion.div key={i} className='ag-svc-detail__gallery-img'
                initial={{ opacity:0, scale:0.96 }} whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.08 }}>
                <img src={img} alt={`${svc.title} sample ${i+1}`} />
              </motion.div>
            ))}
          </div>
          <p className='ag-svc-detail__gallery-note'>* Sample visuals. Your actual project will feature your brand.</p>
        </div>

        {/* Process */}
        <div className='ag-svc-detail__process'>
          <span className='ag-svc-detail__section-label'>How It Works</span>
          <h2 className='ag-svc-detail__section-title' style={{ marginBottom:36 }}>Our Process</h2>
          <div className='ag-svc-detail__process-grid'>
            {svc.process.map((step,i) => (
              <motion.div key={i} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}>
                <div className='ag-svc-detail__process-num'>{step.step}</div>
                <div className='ag-svc-detail__process-bar' />
                <div className='ag-svc-detail__process-title'>{step.title}</div>
                <p className='ag-svc-detail__process-desc'>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div className='ag-svc-detail__cta'
          initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <h2>Ready to Get Started?</h2>
          <p>Tell us about your {svc.title.toLowerCase()} project and we will respond within the hour with a clear plan and fair price.</p>
          <div className='ag-svc-detail__cta-btns'>
            <a href='https://wa.me/2349067816736' target='_blank' rel='noreferrer' className='ag-svc-detail__cta-btn-wa'>
              📱 WhatsApp Us Now
            </a>
            <Link to='/#contact-us' className='ag-svc-detail__cta-btn-msg'>📧 Send a Message</Link>
          </div>
        </motion.div>

        {/* Other services */}
        <div>
          <h2 className='ag-svc-detail__others-title'>Explore Other Services</h2>
          <div className='ag-svc-detail__others-grid'>
            {others.map(s => (
              <Link key={s.id} to={`/services/${s.id}`} className='ag-svc-detail__other-card'>
                <div className='ag-svc-detail__other-icon'>{s.icon}</div>
                <div className='ag-svc-detail__other-name'>{s.title}</div>
                <p className='ag-svc-detail__other-desc'>{s.description.slice(0,80)}…</p>
                <span className='ag-svc-detail__other-link'>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceDetail