import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { portfolioData } from '../../assets/assets'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = portfolioData.find(p => p.id === id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!project) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-gray-950'>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Project not found</h2>
        <Link to='/' className='text-[#2c459d] font-semibold hover:underline'>← Back to Home</Link>
      </div>
    )
  }

  const others = portfolioData.filter(p => p.id !== id).slice(0, 3)

  return (
    <div className='bg-white dark:bg-gray-950 page-enter'>

      {/* ── HERO ── */}
      <div className={`relative bg-gradient-to-br ${project.gradient} min-h-[60vh] flex flex-col justify-end overflow-hidden`}>
        <img
          src={project.heroImage}
          alt={project.title}
          className='absolute inset-0 w-full h-full object-cover opacity-20'
        />
        <div className='relative z-10 px-4 sm:px-12 lg:px-24 pt-24 pb-2'>
          <button
            onClick={() => navigate(-1)}
            className='inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors'
          >
            ← Back to Portfolio
          </button>
        </div>
        <div className='relative z-10 px-4 sm:px-12 lg:px-24 pb-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex flex-wrap gap-2 mb-4'>
              <span className='bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full'>
                {project.category}
              </span>
              <span className='bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full'>
                {project.industry}
              </span>
            </div>
            <h1 className='text-4xl sm:text-6xl font-black text-white mb-4 leading-tight'>
              {project.title}
            </h1>
            <p className='text-white/75 text-lg font-medium'>
              Client: <span className='text-white font-bold'>{project.client}</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className='max-w-5xl mx-auto px-4 sm:px-12 py-20'>

        {/* Case study blocks */}
        <div className='grid lg:grid-cols-3 gap-6 mb-16'>
          {[
            { label: 'The Problem', icon: '⚠️', text: project.problem, bg: 'bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/30' },
            { label: 'Our Solution', icon: '💡', text: project.solution, bg: 'bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30' },
            { label: 'The Result', icon: '📈', text: project.result, bg: 'bg-green-50 dark:bg-green-950/20 border-green-100 dark:border-green-900/30' },
          ].map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-7 border ${block.bg}`}
            >
              <div className='text-2xl mb-3'>{block.icon}</div>
              <h3 className='font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide'>
                {block.label}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>{block.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 mb-16'>
          {project.tags.map(tag => (
            <span key={tag} className='bg-[#2c459d]/10 text-[#2c459d] text-xs font-semibold px-4 py-2 rounded-full'>
              {tag}
            </span>
          ))}
        </div>

        {/* Gallery — featured large */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <span className='section-label'>Project Gallery</span>
          <h2 className='text-3xl font-black text-gray-900 dark:text-white mb-8'>
            Project Visuals
          </h2>

          {/* First image large */}
          <div className='rounded-3xl overflow-hidden mb-4'>
            <img
              src={project.gallery[0]}
              alt={`${project.title} main`}
              className='w-full h-[400px] sm:h-[520px] object-cover hover:scale-102 transition-transform duration-700'
            />
          </div>

          {/* Remaining images grid */}
          {project.gallery.length > 1 && (
            <div className={`grid gap-4 ${project.gallery.length === 2 ? 'grid-cols-1' : 'grid-cols-2'}`}>
              {project.gallery.slice(1).map((img, i) => (
                <div key={i} className='rounded-2xl overflow-hidden'>
                  <img
                    src={img}
                    alt={`${project.title} ${i + 2}`}
                    className='w-full h-64 object-cover hover:scale-105 transition-transform duration-500'
                  />
                </div>
              ))}
            </div>
          )}

          <p className='text-center text-sm text-gray-400 mt-4 dark:text-gray-500'>
            * Placeholder images shown. Actual project deliverables available on request.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='bg-black dark:bg-white rounded-3xl p-10 text-center mb-20'
        >
          <h2 className='text-3xl font-black text-white dark:text-black mb-3'>
            Want Results Like This?
          </h2>
          <p className='text-white/60 dark:text-black/60 max-w-lg mx-auto mb-8 text-sm leading-relaxed'>
            Let us work on your project and deliver results that move your business forward.
            Contact us today for a free quote.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <a
              href='https://wa.me/2349067816736'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center gap-2 bg-[#2c459d] text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-[#1e3080] transition-all'
            >
              📱 Start Your Project
            </a>
            <Link
              to='/'
              className='inline-flex items-center justify-center gap-2 bg-white/10 dark:bg-black/10 text-white dark:text-black border border-white/20 dark:border-black/20 font-bold px-8 py-3.5 rounded-full text-sm hover:bg-white/20 transition-all'
            >
              View More Work →
            </Link>
          </div>
        </motion.div>

        {/* Other projects */}
        <div>
          <h2 className='text-2xl font-black text-gray-900 dark:text-white mb-8'>
            More Projects
          </h2>
          <div className='grid sm:grid-cols-3 gap-5'>
            {others.map(p => (
              <Link
                key={p.id}
                to={`/portfolio/${p.id}`}
                className='group rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-1'
              >
                <div className={`h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-4xl`}>
                  {p.icon}
                </div>
                <div className='p-4 bg-white dark:bg-gray-900'>
                  <div className='text-xs font-bold text-[#2c459d] mb-1'>{p.category}</div>
                  <div className='font-bold text-gray-900 dark:text-white text-sm group-hover:text-[#2c459d] transition-colors'>
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail