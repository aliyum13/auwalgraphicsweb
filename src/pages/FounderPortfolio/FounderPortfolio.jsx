import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { founderData, portfolioData } from '../../assets/assets'
import './FounderPortfolio.css'

const filters = ['All','Branding','Graphic Design','Web Design','Print Design','Packaging']

const FounderPortfolio = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [activeFilter, setActiveFilter] = useState('All')
  const [imgError, setImgError] = useState(false)
  const filtered = activeFilter === 'All' ? portfolioData : portfolioData.filter(p => p.category === activeFilter)

  const showPhoto = founderData.photo && founderData.photo.trim() !== '' && !imgError

  return (
    <div className='ag-founder page-enter'>

      {/* ── HERO ── */}
      <div className='ag-founder__hero'>
        <div className='ag-founder__hero-glow' />
        <div className='ag-founder__hero-grid' />
        <div className='ag-founder__hero-inner'>

          {/* LEFT */}
          <motion.div initial={{ opacity:0,y:30 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.7 }}>
            <Link to='/' className='ag-founder__back'>← Back to Auwal Graphics</Link>
            <div className='ag-founder__eyebrow'>
              <span className='ag-founder__eyebrow-dot' />
              Available for Projects & Remote Work
            </div>
            <h1 className='ag-founder__name'>
              <span className='blue'>Muhammad</span><br />
              <span>Auwal Ali</span>
            </h1>
            <div className='ag-founder__roles'>
              <span className='ag-founder__role'>🎨 Graphic Designer</span>
              <span className='ag-founder__role'>💻 Web Developer</span>
              <span className='ag-founder__role'>🧠 Brand Strategist</span>
            </div>
            <p className='ag-founder__bio'>{founderData.bio}</p>
            <div className='ag-founder__hero-btns'>
              <a href={founderData.socials.whatsapp} target='_blank' rel='noreferrer' className='ag-founder__btn-primary'>💼 Hire Me</a>
              <a href='#founder-work' className='ag-founder__btn-ghost'>View My Work →</a>
              <a href='#' className='ag-founder__btn-cv'>📄 Download CV</a>
            </div>
          </motion.div>

          {/* RIGHT — portrait */}
          <motion.div initial={{ opacity:0,x:40 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.8, delay:0.3 }}>
            <div className='ag-founder__portrait-wrap'>
              <div className='ag-founder__portrait'>
                {showPhoto ? (
                  <img
                    src={founderData.photo}
                    alt={founderData.name}
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className='ag-founder__portrait-fallback'>
                    <div className='ag-founder__portrait-placeholder'>👨‍💻</div>
                    <p className='ag-founder__portrait-placeholder-text'>
                      Add your photo URL in assets.js founderData.photo
                    </p>
                  </div>
                )}
                <div className='ag-founder__name-card'>
                  <div className='ag-founder__name-card-name'>{founderData.name}</div>
                  <div className='ag-founder__name-card-role'>Creative Director · Auwal Graphics</div>
                </div>
              </div>
              {['Multi-Skilled ✦','Remote Ready 🌍','Nigeria Based 🇳🇬'].map((b,i) => (
                <motion.div key={b} className='ag-founder__portrait-badge'
                  animate={{ y:[0,-8,0] }} transition={{ duration:3, repeat:Infinity, delay:i*0.6 }}>
                  {b}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── STATEMENT ── */}
      <div className='ag-founder__statement'>
        <motion.p initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          I combine <span>creativity with business thinking</span> to build visuals and digital experiences
          that help brands stand out, sell better, and{' '}
          <span style={{ textDecoration:'underline', textDecorationColor:'rgba(255,255,255,0.3)' }}>grow faster.</span>
        </motion.p>
      </div>

      {/* ── SKILLS ── */}
      <div className='ag-founder__skills'>
        <div className='ag-founder__section-header'>
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <span className='ag-founder__section-label'>Expertise</span>
            <h2 className='ag-founder__section-title'>Core Skills</h2>
          </motion.div>
        </div>
        <div className='ag-founder__skills-grid'>
          {founderData.skills.map((skill,i) => (
            <motion.div key={i} className='ag-founder__skill-card'
              initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.07 }}>
              <div className='ag-founder__skill-top'>
                <div className='ag-founder__skill-name-wrap'>
                  <span className='ag-founder__skill-icon'>{skill.icon}</span>
                  <span className='ag-founder__skill-name'>{skill.name}</span>
                </div>
                <span className='ag-founder__skill-pct'>{skill.level}%</span>
              </div>
              <div className='ag-founder__skill-bar'>
                <motion.div className='ag-founder__skill-fill'
                  initial={{ width:0 }}
                  whileInView={{ width:`${skill.level}%` }}
                  viewport={{ once:true }}
                  transition={{ duration:1.1, delay:i*0.08, ease:'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── PORTFOLIO ── */}
      <div className='ag-founder__portfolio' id='founder-work'>
        <div className='ag-founder__portfolio-intro'>
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
            <span className='ag-founder__section-label'>Portfolio</span>
            <h2 className='ag-founder__section-title'>Featured Projects</h2>
            <p className='ag-founder__portfolio-sub'>Real projects delivered for real clients — solving business problems through design and technology.</p>
          </motion.div>
        </div>
        <div className='ag-founder__portfolio-filters'>
          {filters.map(f => (
            <button key={f}
              className={`ag-founder__filter-btn${activeFilter===f?' active':''}`}
              onClick={() => setActiveFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className='ag-founder__portfolio-grid'>
          {filtered.map((p,i) => (
            <motion.div key={p.id} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.07 }}>
              <Link to={`/portfolio/${p.id}`} className='ag-portfolio__card ag-founder__portfolio-card'>
                <div className={`ag-portfolio__thumb bg-gradient-to-br ${p.gradient}`}>
                  {p.icon}
                  <div className='ag-portfolio__overlay'>
                    <span className='ag-portfolio__view-btn'>View Case Study →</span>
                  </div>
                </div>
                <div className='ag-founder__portfolio-card-info'>
                  <span className='ag-founder__portfolio-card-cat'>{p.category}</span>
                  <div className='ag-founder__portfolio-card-title'>{p.title}</div>
                  <div className='ag-founder__portfolio-card-client'>{p.client}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div className='ag-founder__timeline'>
        <div className='ag-founder__section-header'>
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
            <span className='ag-founder__section-label'>Journey</span>
            <h2 className='ag-founder__section-title'>My Creative Journey</h2>
          </motion.div>
        </div>
        <div className='ag-founder__tl-wrap'>
          {founderData.timeline.map((item,i) => (
            <motion.div key={i}
              className={`ag-founder__tl-item${i===founderData.timeline.length-1?' current':''}`}
              initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.08 }}>
              <div className='ag-founder__tl-year'>{item.year}</div>
              <div className='ag-founder__tl-title'>{item.title}</div>
              <p className='ag-founder__tl-desc'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── TOOLS ── */}
      <div className='ag-founder__tools'>
        <div className='ag-founder__section-header'>
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
            <span className='ag-founder__section-label'>Tech Stack</span>
            <h2 className='ag-founder__section-title'>Tools & Software</h2>
          </motion.div>
        </div>
        <div className='ag-founder__tools-grid'>
          {founderData.tools.map((t,i) => (
            <motion.div key={i} className='ag-founder__tool'
              initial={{ opacity:0,scale:0.9 }} whileInView={{ opacity:1,scale:1 }}
              viewport={{ once:true }} transition={{ duration:0.3, delay:i*0.05 }}>
              <div className='ag-founder__tool-icon'>{t.icon}</div>
              <div className='ag-founder__tool-name'>{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── RECRUITER ── */}
      <div className='ag-founder__recruiter'>
        <div className='ag-founder__recruiter-inner'>
          <motion.div initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}>
            <span className='ag-founder__section-label'>For Recruiters & Clients</span>
            <h2 className='ag-founder__section-title'>Currently Available For</h2>
            <div className='ag-founder__avail-list'>
              {founderData.availableFor.map((item,i) => (
                <div key={i} className='ag-founder__avail-item'>
                  <span className='ag-founder__avail-check'>✓</span>
                  {item}
                </div>
              ))}
            </div>
            <a href='#' className='ag-founder__resume-btn'>📄 View Full Resume</a>
          </motion.div>
          <motion.div initial={{ opacity:0,x:20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }}>
            <div className='ag-founder__hire-card'>
              <div style={{ fontSize:'3rem', marginBottom:14 }}>🤝</div>
              <h3>Let us Work Together</h3>
              <p>Whether you need a logo, a website, branding, or ongoing support — I am ready.</p>
              <div className='ag-founder__hire-btns'>
                <a href={founderData.socials.whatsapp} target='_blank' rel='noreferrer' className='ag-founder__hire-btn-wa'>📱 WhatsApp Me</a>
                <a href={`mailto:${founderData.socials.email}`} className='ag-founder__hire-btn-email'>📧 Send an Email</a>
              </div>
              <div className='ag-founder__hire-socials'>
                {[['LinkedIn',founderData.socials.linkedin],['Behance',founderData.socials.behance],['Instagram',founderData.socials.instagram]].map(([lbl,href]) => (
                  <a key={lbl} href={href} target='_blank' rel='noreferrer' className='ag-founder__hire-social'>{lbl}</a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer strip */}
      <div className='ag-founder__footer-strip'>
        <Link to='/' className='ag-founder__footer-link'>← Back to Auwal Graphics Agency</Link>
      </div>

    </div>
  )
}

export default FounderPortfolio
