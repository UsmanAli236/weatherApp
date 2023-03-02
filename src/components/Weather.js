import React from 'react'
import {Card} from 'semantic-ui-react'
// import './index.css'
import moment from 'moment';

const WeatherCard  = ({data}) => {
    const {
        main,
        name,
        temp,
        sunset,
        sunrise,
        humidity
    }=data;
  return (
    <Card>
    <Card.Content>
        <Card.Header className="header">City Name {name}</Card.Header>
        <p>Temprature: {temp} &deg;C</p>
        <p>Sunrise: {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {main}</p>
        <p>Humidity: {humidity} %</p>
        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
    </Card.Content>
  </Card>
  )
}

export default WeatherCard 
