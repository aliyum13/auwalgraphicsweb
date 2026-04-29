import React from 'react'
import { motion } from 'motion/react'

const trustItems = [
  { num: '200+', label: 'Projects Delivered' },
  { num: '100+', label: 'Happy Clients' },
  { icon: '🏙️', label: 'Abuja Based' },
  { icon: '⚡', label: 'Fast Turnaround' },
  { icon: '🚚', label: 'Nationwide Delivery' },
  { num: '5★', label: 'Client Rating' },
  { icon: '🇳🇬', label: 'Nigeria's Best' },
]

const TrustBar = () => {
  // Duplicate items for seamless loop
  const items = [...trustItems, ...trustItems]

  return (
    <div className='bg-primary py-4 overflow-hidden'>
      <div className='flex whitespace-nowrap animate-marquee'>
        {items.map((item, i) => (
          <span key={i} className='inline-flex items-center gap-2 px-10'>
            <span className='font-extrabold text-[#f0b429] text-lg' style={{ fontFamily: 'Syne, sans-serif' }}>
              {item.num || item.icon}
            </span>
            <span className='text-white/80 text-sm font-medium'>{item.label}</span>
            <span className='text-white/25 mx-4 text-lg'>•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default TrustBar