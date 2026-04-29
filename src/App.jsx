import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './Cursor.css'

import Navbar from './components/Navbar/Navbar'
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat'
import QuotePopup from './components/QuotePopup/QuotePopup'
import Hero from './components/Hero/Hero'
import TrustBar from './components/TrustBar/Trustbar'
import Services from './components/Services/Services'
import WhyUs from './components/WhyUs/WhyUs'
import Portfolio from './components/Portfolio/Portfolio'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Testimonials from './components/Testimonials/Testimonials'
import CTABanner from './components/CTABanner/CTABanner'
import FAQ from './components/FAQ/FAQ'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import FounderPortfolio from './pages/FounderPortfolio/FounderPortfolio'

const HomePage = ({ openPopup }) => (
  <>
    <Hero openPopup={openPopup} />
    <TrustBar />
    <Services />
    <WhyUs />
    <Portfolio />
    <HowItWorks />
    <Testimonials />
    <CTABanner openPopup={openPopup} />
    <FAQ />
    <ContactUs />
  </>
)

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const AppContent = () => {
  const [theme, setTheme]     = useState(localStorage.getItem('theme') || 'light')
  const [popupOpen, setPopup] = useState(false)
  const { pathname }          = useLocation()
  const isFounderPage         = pathname === '/founder'

  // ── Custom cursor (fixed: using translate -50% -50% so the center aligns) ──
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const pos     = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const raf     = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    const tick = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = mouse.current.x + 'px'
        dotRef.current.style.top  = mouse.current.y + 'px'
      }
      // Ring lags behind with lerp
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.x + 'px'
        ringRef.current.style.top  = pos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  // Hide cursor when mouse leaves window
  useEffect(() => {
    const hide = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = '0'
      if (ringRef.current) ringRef.current.style.opacity = '0'
    }
    const show = () => {
      if (dotRef.current)  dotRef.current.style.opacity  = '1'
      if (ringRef.current) ringRef.current.style.opacity = '1'
    }
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)
    return () => {
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [])

  return (
    <div className='relative dark:bg-gray-950'>
      <Toaster position='top-center' />

      {!isFounderPage && (
        <Navbar theme={theme} setTheme={setTheme} openPopup={() => setPopup(true)} />
      )}

      <ScrollToTop />

      <Routes>
        <Route path='/'             element={<HomePage openPopup={() => setPopup(true)} />} />
        <Route path='/services/:id' element={<ServiceDetail />} />
        <Route path='/portfolio/:id'element={<ProjectDetail />} />
        <Route path='/founder'      element={<FounderPortfolio />} />
      </Routes>

      {!isFounderPage && (
        <Footer theme={theme} openPopup={() => setPopup(true)} />
      )}

      <WhatsAppFloat />
      <QuotePopup isOpen={popupOpen} onClose={() => setPopup(false)} />

      {/* ── CURSOR ELEMENTS ── */}
      {/* Using id="ag-cursor-dot/ring" which are styled in Cursor.css */}
      <div id='ag-cursor-dot'  ref={dotRef}  />
      <div id='ag-cursor-ring' ref={ringRef} />
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
)

export default App