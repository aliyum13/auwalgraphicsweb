import React from 'react'
import './TrustBar.css'

const items = [
  { icon: '👕',   label: 'No Minimum Order' },
  { icon: '🖨️',  label: 'Printed On Demand' },
  { icon: '🏙️',  label: 'Abuja Based' },
  { icon: '⚡',   label: 'Fast Turnaround' },
  { icon: '🚚',   label: 'Delivery Across Abuja' },
  { icon: '📦',   label: 'Track Your Order Online' },
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