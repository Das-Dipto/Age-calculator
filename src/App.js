
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
    setDay(day)
    setMonth(month)
    setYear(year)
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
