import React from 'react';
import PropTypes from 'prop-types'; 
import './style.css';

const WeatherExtra = ({ humidity, wind }) =>(
     <div className="WeatherExtrainfo">
         <span className="extrainfotext">{`Humedad: ${humidity} % -  `}</span>
         <span className="extrainfotext" >{`${wind} wind`}</span>
     </div>
);

WeatherExtra.prototype ={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
}

export default WeatherExtra;