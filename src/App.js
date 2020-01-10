import React, { Component } from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component'
import Form from './app_component/form.component'

const Api_key="68646d51814f1710235250ede82c8e26"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city: undefined,
      icon:undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
      }
    
  this.weathericon={
    Thunderstorm:"wi-thunderstorm",
    Drizzle:"wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear:"wi-day-sunny",
    Clouds: "wi-day-fog"

  }
 
  
  }


  calCelsius(temp){
    let celsius=Math.floor(temp-273.15)
    return(celsius)
  }

  
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }


  getWeather= async e=>{

    e.preventDefault();

    const city=e.target.elements.city.value;
   if(city)
   {
    const api_call= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`)
    const response= await api_call.json();
    console.log(response)
    this.setState({
      city: `${response.name}`,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description,
      
    })
   this.get_WeatherIcon(this.weathericon,response.weather[0].id)
   } else {
     this.setState({error:true})
   }
  } 
    render(){
    return(
<div className="App">
      <Form loadweather={this.getWeather} error={this.state.error}/>
      <Weather 
      city={this.state.city}
      temp_min={this.state.temp_min}
      temp_max={this.state.temp_max}
      temp_celsius={this.state.celsius}
      description={this.state.description}
      weathericon={this.state.icon}
      
      />
    </div>
    )
  }
}


export default App;
