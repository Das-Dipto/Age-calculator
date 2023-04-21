import React from 'react'
import {useState} from 'react';
import customLogo from '../../src/icon-arrow.svg'
import '../../src/index.css'



function DateInput(props) {
    const [dayVal, setDay] = useState('');
    const [monthVal, setMonth] = useState('');
    const [yearVal, setYear] = useState('');

    const [dayErrorMessage, setdayErrorMessage] = useState(``);
    const [monthErrorMessage, setMonthErrorMessage] = useState(``);
    const [yearErrorMessage, setYearErrorMessage] = useState(``);

    const [isFocusedDate, setFocusStateDate] = useState(false);
    const [isFocusedMonth, setFocusStateMonth] = useState(false);
    const [isFocusedYear, setFocusStateYear] = useState(false);

    const dayerrorStyle = {
        outlineColor : isFocusedDate ? 'hsl(357, 88%, 49%)' : 'hsl(259, 100%, 65%)',
        color : isFocusedDate ? `hsl(357, 88%, 49%)` : `hsl(0, 1%, 44%)`,
    };

    const montherrorStyle = {
        outlineColor : isFocusedMonth ? 'hsl(357, 88%, 49%)' : 'hsl(259, 100%, 65%)',
        color : isFocusedMonth ? `hsl(357, 88%, 49%)` : `hsl(0, 1%, 44%)`,
    };

    const yearerrorStyle = {
        outlineColor : isFocusedYear ? 'hsl(357, 88%, 49%)' : 'hsl(259, 100%, 65%)',
        color : isFocusedYear ? `hsl(357, 88%, 49%)` : `hsl(0, 1%, 44%)`,
    }

    const handleDate = (event) =>{
        if(event.target.value){
            if(isNaN(event.target.value) === true){
                setdayErrorMessage('* Required date in number');
                setFocusStateDate(true)
            }
    
            else{
                setDay(event.target.value);
                setFocusStateDate(false);
                setdayErrorMessage('');
            }
        }
        else{
            setdayErrorMessage('* Required field is empty');
            setFocusStateDate(true)
        }  
    }

    const handleMonth = (event) =>{
        if(event.target.value){
            if(isNaN(event.target.value) === true){
                setMonthErrorMessage('* Required month in number');
                setFocusStateMonth(true)
            }
    
            else{
                setMonth(event.target.value);
                setFocusStateMonth(false);
                setMonthErrorMessage('');
            }
        }
        else{
            setMonthErrorMessage('* Required field is empty');
            setFocusStateMonth(true)
        }
 
    }

    const handleYear = (event) =>{
        if(event.target.value){
            if(isNaN(event.target.value) === true){
                setYearErrorMessage('* Required year in number');
                setFocusStateYear(true)
            }
    
            else{
                setYear(event.target.value);
                setFocusStateYear(false);
                setYearErrorMessage('');
            }
        }
        else{
            setYearErrorMessage('* Required field is empty');
            setFocusStateYear(true)
        }
    }

  return (
    <>
        <div className="date-input-field d-flex flex-wrap flex-sm-nowrap mt-2 mb-3">
            <div className="day-input">
                <label className="d-block mb-1">DAY</label>
                <input type="text" className='w-75' placeholder='DD' onChange={handleDate} style={dayerrorStyle}/>
                <p className='special-error-message'>{dayErrorMessage}</p>
            </div>
            <div className="month-input">
                <label className="d-block mb-1">MONTH</label>
                <input type="text" className='w-75' placeholder='MM' onChange={handleMonth} style={montherrorStyle}/>
                <p className='special-error-message'>{monthErrorMessage}</p>
            </div>
            <div className="year-input">
                <label className="d-block mb-1">YEAR</label>
                <input type="text" className='w-75' placeholder='YY' onChange={handleYear} style={yearerrorStyle} />
                <p className='special-error-message'>{yearErrorMessage}</p>
            </div>
        </div>
        <div className="button d-flex justify-content-center justify-content-md-end mb-5">
            <button type="button" className="btn btn-primary p-2 " onClick={()=>props.btnPress(dayVal,monthVal,yearVal)}>
                <img src={customLogo} alt="customLogo" />
            </button>
        </div>
    </>
  )
}

export default DateInput