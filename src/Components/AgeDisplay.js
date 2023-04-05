import React from 'react'
import '../../src/index.css'

function AgeDisplay(props) {
  return (
    <div className="age-display ">
        <h1>
            <span className='me-2'>
                {(props.year) ? props.year: 0}
            </span>
            years
        </h1>
        <h1>
            <span className='me-2'>
                {(props.month) ? props.month: 0}
            </span>
            months
        </h1>
        <h1>
            <span className='me-2'>
                {(props.day) ? props.day: 0}
            </span>
            days
        </h1>
    </div>
  )
}

export default AgeDisplay