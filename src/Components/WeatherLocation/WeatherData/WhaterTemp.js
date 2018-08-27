import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';

import {CLOUD, CLOUDY , DAYSUNNY, RAIN , SNOW , WINDY, THUNDER, DRIZZEL} from '../../../constants/weathers';


const selectIcon =  (weatherstate) => {
    switch (weatherstate) {
        case CLOUD:
          return "cloud"
        case CLOUDY:
          return "cloudy"
        case DAYSUNNY:
          return "day-sunny"
        case RAIN:
          return "rain"
        case SNOW:
          return "snow"
        case WINDY:
          return "windy"
        case THUNDER:
          return "day-thunderstorm"
        case DRIZZEL:
          return "day-showers"
        default:
            return "day-sunny"
    }
}

const getWhaterIcon = weatherstate => {
    return(
        <WeatherIcons className="wicon" name={selectIcon(weatherstate)} size="3x" />
    )
}

const WeatherTemp = ({ temp , weatherstate })=>(
    <div className="weatherTempContent">
        {getWhaterIcon(weatherstate)}
        <span className="temp"> 
             {`${temp}`}
        </span>
        <span className="tempclass">
                C°
        </span>
    </div>
)

WeatherTemp.prototype = {
    temp: PropTypes.number.isRequired ,
    weatherstate: PropTypes.string
}

export default WeatherTemp;