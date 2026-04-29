import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import logo from '../../assets/logo.png'
import './Footer.css'

const PHONE   = '+234 901 590 6190'
const EMAIL   = 'auwalgraphicsinfo@gmail.com'
const ADDRESS = 'Wuse Zone 4, Fabdal Plaza Suite 211, Abuja'
const WA_LINK = 'https://wa.me/2349067816736'
const IG_LINK = 'https://instagram.com/auwal.graphics'
const FB_LINK = 'https://facebook.com'
const TW_LINK = 'https://twitter.com'
const LI_LINK = 'https://linkedin.com'

const Footer = ({ openPopup }) => (
  <motion.footer
    className='ag-footer'
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    id='footer'
  >
    <div className='ag-footer__content'>

      {/* ── BRAND ── */}
      <div className='ag-footer__brand'>
        <Link to='/' className='ag-footer__logo'>
          <img src={logo} alt='Auwal Graphics' className='ag-footer__logo-img' />
          <span className='ag-footer__logo-text'>
            <span className='blue'>Auwal</span>
            <span className='white'>Graphics</span>
          </span>
        </Link>

        <p className='ag-footer__bio'>
          <strong style={{ color: '#fff' }}>Auwal Graphics</strong> is Abuja's premier creative agency —
          delivering premium graphic design, professional printing, stunning websites,
          and powerful branding to businesses across Nigeria.
        </p>

        <div className='ag-footer__socials'>
          <a href={FB_LINK} target='_blank' rel='noopener noreferrer' aria-label='Facebook'
            className='ag-footer__social-btn ag-footer__social-facebook'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='16' height='16'>
              <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
            </svg>
          </a>
          <a href={TW_LINK} target='_blank' rel='noopener noreferrer' aria-label='Twitter'
            className='ag-footer__social-btn ag-footer__social-twitter'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='16' height='16'>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z'/>
            </svg>
          </a>
          <a href={IG_LINK} target='_blank' rel='noopener noreferrer' aria-label='Instagram'
            className='ag-footer__social-btn ag-footer__social-instagram'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='16' height='16'>
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/>
            </svg>
          </a>
          <a href={WA_LINK} target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'
            className='ag-footer__social-btn ag-footer__social-whatsapp'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='white' width='16' height='16'>
              <path d='M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.494 2.027 7.807L0 32l8.418-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.455c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.63-.199-.896.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.465.298-.863.1-.398-.199-1.681-.62-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.265-.398.398-.664.133-.265.066-.498-.033-.697-.1-.199-.896-2.16-1.228-2.958-.323-.777-.651-.672-.896-.684-.232-.011-.498-.014-.763-.014a1.46 1.46 0 00-1.062.498c-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.626 4.12c.199.265 2.808 4.287 6.802 6.014.951.411 1.693.656 2.271.84.954.304 1.823.261 2.51.158.765-.114 2.354-.962 2.686-1.892.332-.93.332-1.727.232-1.892-.099-.166-.365-.265-.763-.464z'/>
            </svg>
          </a>
          <a href={LI_LINK} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'
            className='ag-footer__social-btn ag-footer__social-linkedin'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='16' height='16'>
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <div className='ag-footer__col'>
        <h2>Services</h2>
        <ul>
          <li><Link to='/services/graphic-design'>Graphic Design</Link></li>
          <li><Link to='/services/web-design'>Web Design</Link></li>
          <li><Link to='/services/printing'>Printing</Link></li>
          <li><Link to='/services/branding'>Branding</Link></li>
          <li><Link to='/services/media-production'>Media Production</Link></li>
          <li><Link to='/services/business-support'>Business Support</Link></li>
        </ul>
      </div>

      {/* ── QUICK LINKS ── */}
      <div className='ag-footer__col'>
        <h2>Quick Links</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><a href='/#services'>Services</a></li>
          <li><a href='/#portfolio'>Portfolio</a></li>
          <li><a href='/#why-us'>About</a></li>
          <li><a href='/#faq'>FAQ</a></li>
          <li>
            <Link to='/founder' style={{ color: '#2c459d', fontWeight: 700 }}>
              Meet the Founder ↗
            </Link>
          </li>
          <li>
            <button onClick={openPopup}
              style={{ background:'none', border:'none', color:'#888', fontSize:'13.5px', cursor:'pointer', padding:0, fontFamily:'Poppins,sans-serif' }}>
              Get a Quote
            </button>
          </li>
        </ul>
      </div>

      {/* ── CONTACT ── */}
      <div className='ag-footer__col'>
        <h2>Contact</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
          <div className='ag-footer__contact-item'>
            <span className='icon'>📞</span>
            <a href={`tel:${PHONE}`}>{PHONE}</a>
          </div>
          <div className='ag-footer__contact-item'>
            <span className='icon'>✉️</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className='ag-footer__contact-item'>
            <span className='icon'>📍</span>
            <span>{ADDRESS}</span>
          </div>
          <div className='ag-footer__contact-item'>
            <span className='icon'>📸</span>
            <a href={IG_LINK} target='_blank' rel='noreferrer'>@auwal.graphics</a>
          </div>
        </div>
        <a href={WA_LINK} target='_blank' rel='noopener noreferrer' className='ag-footer__cta'>
          📱 WhatsApp Us
        </a>
      </div>

    </div>

    <hr className='ag-footer__divider' />

    <div className='ag-footer__bottom'>
      <p className='ag-footer__copyright'>
        © {new Date().getFullYear()} <span>Auwal Graphics</span>. All rights reserved. Abuja, Nigeria.
      </p>
      <Link to='/founder' className='ag-footer__founder-link'>
        👨‍💻 Meet the Founder — Muhammad Auwal Ali →
      </Link>
    </div>
  </motion.footer>
)

export default Footer