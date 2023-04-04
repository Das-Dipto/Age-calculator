
import { useState } from 'react';
import './index.css'
import './App.css';
import DateInput from './Components/DateInput';
import AgeDisplay from './Components/AgeDisplay';


function App() {
  const [dayVal, setDay] = useState('');
  const [monthVal, setMonth] = useState('');
  const [year, setYear] = useState('');

  const btnPress =(day, month, year)=>{
  
    let birthDate =new Date(`${parseInt(year)}-${parseInt(month)}-${parseInt(day)}`);
    let currentDate = new Date();

    // Calculate the difference in years
    let diffInYears = `
              ${( parseInt(currentDate.getFullYear()) !== parseInt(birthDate.getFullYear())) ?
              Math.abs(parseInt(currentDate.getFullYear()) - parseInt(birthDate.getFullYear())):
              `0`}
            `;

    // Calculate the difference in month
    let diffInMonth = `
                ${( parseInt(currentDate.getMonth() + 1) !== parseInt(birthDate.getMonth() + 1)) ?
                Math.abs(parseInt(currentDate.getMonth() + 1) - parseInt(birthDate.getMonth() + 1)):
                `0`}
              `;

    // Calculate the difference in Date         
    let diffInDate = `
                ${( parseInt(currentDate.getDate()) !== parseInt(birthDate.getDate())) ?
                Math.abs(parseInt(currentDate.getDate()) - parseInt(birthDate.getDate())):
                `0`}
             `;
   
    setYear(diffInYears);
    setMonth(diffInMonth);
    setDay(diffInDate);

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
