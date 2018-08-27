import React from 'react';
import WhaterTemper from './WhaterTemp';
import PropTypes from 'prop-types';
import WeatherExtra from './WeatherExtrainfo';
import './style.css';

const weatherData = ({ data }) => { 
    const {temp, weatherstate, humidity, wind} = data
  return( 
        <div className="WeatherContent"> 
            <WhaterTemper temp={temp} weatherstate={weatherstate} />
            <WeatherExtra humidity={humidity} wind={wind}/>
        </div>
  )
}

weatherData.PropTypes= {
    data: PropTypes.shape({
         temp: PropTypes.number.isRequired,
         weatherstate: PropTypes.string.isRequired,
         humidity: PropTypes.number.isRequired,
         wind: PropTypes.string.isRequired 
    }),
}

export default weatherData