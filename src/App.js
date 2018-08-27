import React, { Component } from 'react';
import LocationList from './Components/LocationList';
import './App.css';
import { CITY_MX, CITY_CH,  CITY_COL ,CITY_ES,CITY_US  } from './constants/weathers';

const cities = [
   CITY_MX, CITY_CH,CITY_COL,CITY_ES,CITY_US 
]


class App extends Component {

  handleSelectedLocation = city => {
    console.log(`la ciudad es  ${city}`);
  }
  
  render() {
    return (
      <div className="App">
        <LocationList cities={cities} 
                      onSelectedLocation={this.handleSelectedLocation} />
      </div>
    );
  }
}

export default App;
 