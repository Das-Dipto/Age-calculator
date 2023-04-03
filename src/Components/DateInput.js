import React from 'react'
import {useState} from 'react';
import customLogo from '../../src/icon-arrow.svg'
import '../../src/index.css'



function DateInput(props) {
    const [dayVal, setDay] = useState('');
    const [monthVal, setMonth] = useState('');
    const [yearVal, setYear] = useState('');

    const handleDate = (event) =>{
        setDay(event.target.value);
    }

    const handleMonth = (event) =>{
        setMonth(event.target.value);
    }

    const handleYear = (event) =>{
        setYear(event.target.value);
    }

  return (
    <>
        <div className="date-input-field d-flex my-5">
            <div className="day-input">
                <label className="d-block mb-1">DAY</label>
                <input type="text" className='w-75' onChange={handleDate}/>
            </div>
            <div className="month-input">
                <label className="d-block mb-1">MONTH</label>
                <input type="text" className='w-75' onChange={handleMonth}/>
            </div>
            <div className="year-input">
                <label className="d-block mb-1">YEAR</label>
                <input type="text" className='w-75' onChange={handleYear} />
            </div>
        </div>
        <div className="button d-flex justify-content-end">
            <button type="button" className="btn btn-primary p-2 " onClick={()=>props.btnPress(dayVal,monthVal,yearVal)}>
                <img src={customLogo} alt="customLogo" />
            </button>
        </div>
    </>
  )
}

export default DateInput