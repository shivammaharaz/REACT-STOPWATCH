import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time,setTime]=useState(0)
  const [timeOn,setTimeOn]=useState(false);

  useEffect(()=>{
    let interval =null;
    if(timeOn){
    interval =setInterval(()=>
    {
      setTime(prevTime=> prevTime+10)
    },10)
  }
  else{
    clearInterval(interval);
  }

  return ()=>clearInterval(interval)
  })

  const reset=()=>{
    setTime(0)
    setTimeOn(false)
  }
  return (
    <div className="App">
      <div className='watch-face'>
        <span>{('0'+Math.floor((time/60000))).slice(-2)}  :</span>
        <span>{("0"+Math.floor((time/1000))).slice(-2)}  :</span>
        <span>{("0"+( (time/10)%100)).slice(-2)}</span>
        {/* :{((time/10) % 100)} */}
      </div>
      <div className='btn-div'>
      <button className='btn' onClick={()=>setTimeOn(!timeOn)}>{timeOn?"pause":"start"}</button>
      {/* <button onClick={()=>setTimeOn(false)}>pause</button> */}
      <button className='btn' onClick={reset}>reset</button></div>
    </div>
  );
}

export default App;

// https://stopswatch.netlify.app/