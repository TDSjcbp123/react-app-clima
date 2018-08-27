import React, { Component } from 'react';
import WeatherLocation from './WeatherLocation';
import { CITY_MX, CITY_CH,  CITY_COL  } from '../constants/weathers';

class LocationList extends Component {
    render() {
        return (
            <div>
                <WeatherLocation city={CITY_MX}/>
                <WeatherLocation city={CITY_CH}/>
                <WeatherLocation city={CITY_COL}/>
            </div>
        );
    }
}

export default LocationList;
