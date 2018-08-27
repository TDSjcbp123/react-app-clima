import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Preloader } from 'react-materialize';
import Location from './Location';
import transformWeater from '../../services/TransformWeather'
import WeatherData from './WeatherData';
import "./style.css";
import {   API_WEATHER , API_KEY } from '../../constants/weathers';


class WeatherLocation extends Component {

  constructor({city}){
    super();
    this.state = {
         city:  city,
         data: null
    };
    console.log("constructor");
  }
 


    handleUpdateClick =() =>{
        const api_composted = `${API_WEATHER}${this.state.city}&appid=${API_KEY}`
       fetch(api_composted).then(res =>{
          return res.json();
       }).then(data_weather =>{
         
         const data =  transformWeater(data_weather);
          this.setState( { data } )
      });
    
    }

     
     componentWillMount() {
       this.handleUpdateClick();
     }
    
     componentDidMount() {

    }
     
     componentWillUpdate(nextProps, nextState) {

    }

     componentDidUpdate(prevProps, prevState) {

     }
     
  render() {

      const { city , data } = this.state;

       const cityShort = city.split(",", 2);

    return (
    <div className="weatherLocstion">
         <Location city={cityShort[0]}/>
         {data ? <WeatherData data={data} /> :
                 <Preloader size='big'/>  }
   </div>
    )
  }
}
WeatherLocation.PropTypes={
   city:  PropTypes.string
}
export default WeatherLocation;