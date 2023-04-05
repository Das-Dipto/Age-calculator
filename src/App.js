import React from 'react';
import { useState } from 'react';
import './index.css'
import './App.css';
import DateInput from './Components/DateInput';
import AgeDisplay from './Components/AgeDisplay';


function App() {
  const [dayVal, setDay] = useState('_ _');
  const [monthVal, setMonth] = useState('_ _');
  const [year, setYear] = useState('_ _');


  const btnPress =(day, month, year)=>{
  
          let currentDate = new Date();
          let currentDay = currentDate.getDate();
          let currentMonth = 1 + currentDate.getMonth();
          let currentYear = currentDate.getFullYear();

          const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

          if(parseInt(day) > currentDay){
              currentDay = currentDay + months[currentMonth - 1];
              currentMonth = currentMonth - 1;
          }
          
          if(parseInt(month) > currentMonth){
            currentMonth = currentMonth + 12;
            currentYear =currentYear - 1;
          }

          const d = currentDay - parseInt(day);
          const m = currentMonth - parseInt(month);
          const y = currentYear - parseInt(year);

          setDay(d + 1);
          setMonth(m);
          setYear(y);

  }

  return (
   <div className="App ">
      <div className="container d-flex justify-content-center flex-column w-50 mt-5">
       <DateInput btnPress={btnPress}/>
       <AgeDisplay day={dayVal} month={monthVal} year={year}></AgeDisplay>
      </div>
   </div>
  );
}

export default App;
