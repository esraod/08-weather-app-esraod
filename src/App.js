import React, { Component } from 'react';
import './App.css';
import { API_KEY } from './api/Key'

import Search from './components/nav/Search'
import Today from './components/weather-card/Today'
import Week from './components/weather-card/Week'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faFrown,faTint,faWind, faLocationArrow, faSun,faCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch,faFrown,faTint,faWind, faLocationArrow, faSun,faCircle)


class App extends Component {


  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    icon: undefined,
    description: undefined,
    humidity: undefined,
    wind: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: "",
    time: undefined,

    temperature1d: undefined,
    temperature2d: undefined,
    temperature3d: undefined,
    temperature4d: undefined,
    temperature5d: undefined

  }


  componentDidMount() {  
    this.getLocation(); 
    this.getLocationSun();
  }


  getLocation = async (e) =>{
    this.watchId = navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        },
        ()=>{
          var lat = `${this.state.latitude}`;
          var lon = `${this.state.longitude}`;
          let API_WEATHER = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
          fetch(API_WEATHER)
            .then(response => response.json())
            .then(rsp => {
                  console.log(rsp);
                  this.setState({
                    city: rsp.city.name,
                    country: rsp.city.country,
                    temperature: Math.floor(rsp.list["0"].main.temp).toFixed(0),
                    time: rsp.list["0"].dt,
                    icon: rsp.list["0"].weather["0"].id,
                    description: rsp.list["0"].weather["0"].description,
                    humidity: rsp.list[0].main.humidity,
                    wind: Math.floor(rsp.list[0].wind.speed).toFixed(0),
                    temperature1d: Math.floor(rsp.list["6"].main.temp),
                    temperature2d: Math.floor(rsp.list["14"].main.temp),
                    temperature3d: Math.floor(rsp.list["22"].main.temp).toFixed(0),
                    temperature4d: Math.floor(rsp.list["30"].main.temp),
                    temperature5d: Math.floor(rsp.list["38"].main.temp),
                    error: ""
                  });
            }).catch(error => {
                  console.log(error);
              });
            });
              },
                error => this.setState({ error: error.message }),
                {
                  enableHighAccuracy: true,
                  timeout: 20000,
                  maximumAge: 1000,
                  distanceFilter: 5
                }
    );
  } 

  getLocationSun = async (e) =>{

    this.watchId = navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        },
        ()=>{
          var lat = `${this.state.latitude}`;
          var lon = `${this.state.longitude}`;
          let API_WEATHER = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
   
    fetch(API_WEATHER)
    .then(response => response.json())
    .then(rsp => {
          console.log(rsp);
          console.log(rsp.forecast);
          this.setState({
            sunrise: rsp.sys.sunrise,
            sunset: rsp.sys.sunset,
          });
        })
        
  
        .catch(error => {
          console.log(error);
        });
       
      });
      },
  
      
      error => this.setState({ error: error.message }),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 5
      }
    );
  }

  render() {
    return (
      <div>
        <Search />
        <Today 
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature} 
          icon={this.state.icon}
          description={this.state.description}
          humidity={this.state.humidity}
          wind={this.state.wind}
          time ={this.state.time}
          sunrise ={this.state.sunrise}
          sunset={this.state.sunset}
        />
        <Week 
          temperature1d={this.state.temperature1d}
          temperature2d={this.state.temperature2d}
          temperature3d={this.state.temperature3d}
          temperature4d={this.state.temperature4d}
          temperature5d={this.state.temperature5d}
        />
      </div>
    );
  }
}

export default App;
