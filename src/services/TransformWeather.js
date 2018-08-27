import convert from 'convert-units';

import {CLOUD, DAYSUNNY, RAIN , SNOW , THUNDER, DRIZZEL} from '../constants/weathers';

const transformWeater = (data_weather) => {
    const { humidity , temp } =  data_weather.main;
    const { speed } = data_weather.wind;
    const weatherstate = getWeatherState(data_weather.weather);
    const temperature = getTemp(temp);
     const data = {
       temp:  temperature,
       weatherstate,
       humidity, 
       wind: `${speed} m/s` 
     }
    return data;
}

const getTemp = (kelvin ) => {
     return Number(convert(kelvin).from('K').to('C').toFixed(0));
 }

const getWeatherState = (weather) =>{
     const { id } = weather[0]
     
       if(id < 300){
          return THUNDER;
       }else if(id < 400){
          return DRIZZEL;
       }else if(id < 600){
        return RAIN;
       }else if(id < 700){
        return SNOW;
       }else if(id === 800){
         return DAYSUNNY;
       }else{
         return CLOUD;
       } 
}
export default transformWeater;