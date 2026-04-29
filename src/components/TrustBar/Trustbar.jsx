import React from 'react'
import './TrustBar.css'

const items = [
  { num: '200+', label: 'Projects Delivered' },
  { num: '100+', label: 'Happy Clients' },
  { icon: '🏙️',  label: 'Abuja Based' },
  { icon: '⚡',   label: 'Fast Turnaround' },
  { icon: '🚚',   label: 'Nationwide Delivery' },
  { num: '5★',   label: 'Client Rating' },
  { icon: '🇳🇬',  label: "Nigeria's Best" },
]

const TrustBar = () => {
  const doubled = [...items, ...items]
  return (
    <div className='ag-trust'>
      <div className='ag-trust__track'>
        {doubled.map((item, i) => (
          <span key={i} className='ag-trust__item'>
            <span className='ag-trust__num'>{item.num || item.icon}</span>
            <span className='ag-trust__label'>{item.label}</span>
            <span className='ag-trust__sep'>•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default TrustBar