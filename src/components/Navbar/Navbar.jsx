import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import './Navbar.css'

const Navbar = ({ theme, setTheme, openPopup }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const navigate   = useNavigate()
  const location   = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else                  document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  // ── Smooth scroll handler ──
  const scrollTo = (id, closeDrawer = false) => {
    if (closeDrawer) setDrawerOpen(false)

    const doScroll = () => {
      if (!id) { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    if (location.pathname !== '/') {
      // Navigate home first, then scroll after page loads
      navigate('/')
      setTimeout(doScroll, 300)
    } else {
      doScroll()
    }
  }

  const links = [
    { label: 'Home',      id: null },
    { label: 'Services',  id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About',     id: 'why-us' },
    { label: 'Contact',   id: 'contact-us' },
  ]

  return (
    <>
      <motion.nav
        className={`ag-navbar${scrolled ? ' scrolled' : ''}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Logo */}
        <button className='ag-navbar__logo' onClick={() => scrollTo(null)}>
          <img src='/logo.png' alt='Auwal Graphics' />
<span className='ag-navbar__logo-text'>
  <span className='blue'>Auwal</span>
  <span className='black'>Graphics</span>
</span>
        </button>

        {/* Desktop links */}
        <div className='ag-navbar__links'>
          {links.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Right: theme + CTA + hamburger */}
        <div className='ag-navbar__right'>
          <button
            className='ag-navbar__theme-btn'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label='Toggle theme'
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button className='ag-navbar__cta' onClick={openPopup}>
            Get Quote ✦
          </button>

          <button
            className='ag-navbar__hamburger'
            onClick={() => setDrawerOpen(true)}
            aria-label='Open menu'
          >
            <span /><span /><span />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <div
        className={`ag-navbar__drawer-backdrop${drawerOpen ? ' open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />
      <div className={`ag-navbar__drawer${drawerOpen ? ' open' : ''}`}>
        <div className='ag-navbar__drawer-head'>
          <button className='ag-navbar__logo' onClick={() => scrollTo(null, true)}>
            <span className='blue'>Auwal</span>
            <span className='black'>Graphics</span>
            <span className='ag-navbar__logo-dot' />
          </button>
          <button className='ag-navbar__drawer-close' onClick={() => setDrawerOpen(false)}>✕</button>
        </div>
        <div className='ag-navbar__drawer-links'>
          {links.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.id, true)}>
              {l.label}
            </button>
          ))}
          <Link to='/founder' onClick={() => setDrawerOpen(false)}>Meet the Founder</Link>
        </div>
        <button
          className='ag-navbar__drawer-cta'
          onClick={() => { setDrawerOpen(false); openPopup() }}
        >
          🚀 Get a Free Quote
        </button>
      </div>
    </>
  )
}

export default Navbar