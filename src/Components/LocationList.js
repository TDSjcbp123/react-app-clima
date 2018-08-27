import React from 'react';
import ProoTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ( { cities, onSelectedLocation } ) => {

    const handleOnWeatherClick = (city) => {
          console.log('handleOnWeatherClick');
          onSelectedLocation(city);
    }
       
    const construyeLocation = (cities) => {

     return   cities.map( (city) => (
           <WeatherLocation 
               key={city} 
               city={city}
               onWeatherClick={() => handleOnWeatherClick(city)}/>
            )
        )
    }
    
    return (
            <div>
                {construyeLocation(cities)}
            </div>
           )  
  };

LocationList.ProoTypes = {
    cities: ProoTypes.array.isRequired,
    onSelectedLocation: ProoTypes.func,
}

export default LocationList;
