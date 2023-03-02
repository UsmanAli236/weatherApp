import React from 'react'
import { useState ,useEffect} from 'react'
import WeatherCard from './components/Weather.js';

const App = ({props}) => {

  const [data,setData]=useState({});
  const [searchVal,setSearchVal]=useState('');

      
    const fetchData = async () => {
      console.log(searchVal);
      let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=9db7366c74eb91e1974a8b21ec2b0c85`
      let res= await fetch(url);
      let getdata=await res.json();
      const {temp,humidity,pressure}=getdata.main;
      const {main}=getdata.weather;
      const {name}=getdata;
      const {speed}=getdata.wind;
      const {country,sunset}=getdata.sys;
      const newWeatherinfo={
        temp,humidity,pressure,
        main,name,speed,country,sunset
      }
      setData(newWeatherinfo);
    }
 useEffect(()=>{
  fetchData();
 },[]);
  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input type="search" placeholder='search....' autoFocus id='searchid' className='searchbar' 
          value={searchVal} onChange={(e)=>{
            setSearchVal(e.target.value)
          }}/>
          <button onClick={fetchData}>Search</button>
        </div>
      </div>
      <WeatherCard data={data}></WeatherCard>
    </>
  )
}

export default App
