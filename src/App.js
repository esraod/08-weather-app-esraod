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
    temperature5d: undefined,
    icon1d: undefined,
    icon2d: undefined,
    icon3d: undefined,
    icon4d: undefined,
    icon5d: undefined

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
                    icon1d: rsp.list["6"].weather["0"].id,
                    icon2d: rsp.list["14"].weather["0"].id,
                    icon3d: rsp.list["22"].weather["0"].id,
                    icon4d: rsp.list["30"].weather["0"].id,
                    icon5d: rsp.list["38"].weather["0"].id,
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

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const getSun = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const sun = await getSun.json();
    const getDataBySearch = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await getDataBySearch.json();
    // if (city && country)
    // const getDataBySearch = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
  
    if (city) {
      this.setState({
        city: data.city.name,
        country: data.city.country,
        temperature: Math.floor(data.list["0"].main.temp).toFixed(0),
        time: data.list["0"].dt,
        icon: data.list["0"].weather["0"].id,
        description: data.list["0"].weather["0"].description,
        humidity: data.list[0].main.humidity,
        wind: data.list[0].wind.speed,
        sunrise: sun.sys.sunrise,
        sunset: sun.sys.sunset,
        temperature1d: Math.floor(data.list["6"].main.temp),
        temperature2d: Math.floor(data.list["14"].main.temp),
        temperature3d: Math.floor(data.list["22"].main.temp).toFixed(0),
        temperature4d: Math.floor(data.list["30"].main.temp),
        temperature5d: Math.floor(data.list["38"].main.temp),
        icon1d: data.list["6"].weather["0"].id,
        icon2d: data.list["14"].weather["0"].id,
        icon3d: data.list["22"].weather["0"].id,
        icon4d: data.list["30"].weather["0"].id,
        icon5d: data.list["38"].weather["0"].id,
     
      });
    } else {
      this.setState({
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
        temperature5d: undefined,
        icon1d: undefined,
        icon2d: undefined,
        icon3d: undefined,
        icon4d: undefined,
        icon5d: undefined,
        error: "Please search for city and country"
      });
    }
  }

  reload = async (e) => {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Search getWeather={this.getWeather} reload={this.reload}/>
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
          icon1d ={this.state.icon1d}
          icon2d ={this.state.icon2d}
          icon3d ={this.state.icon3d}
          icon4d ={this.state.icon4d}
          icon5d ={this.state.icon5d}
        />
      </div>
    );
  }
}

export default App;
