import React from 'react'
import '../../src/index.css'

function AgeDisplay(props) {
  return (
    <div className="age-display ">
        <h1>
            <span className='me-2'>
                {(props.year) ? props.year: '_ _'}
            </span>
            years
        </h1>
        <h1>
            <span className='me-2'>
                {(props.month) ? props.month: '_ _'}
            </span>
            months
        </h1>
        <h1>
            <span className='me-2'>
                {(props.day) ? props.day: '_ _'}
            </span>
            days
        </h1>
    </div>
  )
}

export default AgeDisplay