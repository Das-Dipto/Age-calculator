
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
    const diffInYears = currentDate.getFullYear() - birthDate.getFullYear();

    // Calculate the difference in months
    const diffInMonths = (currentDate.getMonth() - birthDate.getMonth()) ;

    // Calculate the difference in days
    const diffInDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));

    setYear(diffInYears)
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
