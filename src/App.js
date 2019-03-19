import React, { Component } from 'react';
import './App.css';
import { API_KEY } from './api/Key'

import Search from './components/nav/Search'
import Today from './components/weather-card/Today'
import Week from './components/weather-card/Week'
import Scroll from './components/nav/Scroll'
import moment from 'moment'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faFrown,faTint,faWind, faLocationArrow, faSun,faCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch,faFrown,faTint,faWind, faLocationArrow, faSun,faCircle)


class App extends Component {


  state = {
    city: undefined,
    country: "loading",
    temperature: undefined,
    icon: undefined,
    description: undefined,
    humidity: undefined,
    wind: undefined,
    sunrise: undefined,
    sunset: undefined,
    time: undefined,
    dayorn: undefined,

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

    time1: undefined,
    time2: undefined,
    time3: undefined,
    icon1h: undefined,
    icon2h: undefined,
    icon3h: undefined,
    humidity1h: undefined,
    humidity2h: undefined,
    humidity3h: undefined,
    wind1h: undefined,
    wind2h: undefined,
    wind3h: undefined,
  
    temperature1h: undefined,
    temperature2h: undefined,
    temperature3h: undefined,
    description1h:undefined,
    description2h:undefined,
    description3h:undefined,

    error: ""
  }


  componentDidMount() {  
    this.getLocation(); 
    this.getLocationSun();
  }


  getLocation = async (e) => {
    this.watchId = navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        },
          () => {
            var lat = `${this.state.latitude}`;
            var lon = `${this.state.longitude}`;
            let API_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
            fetch(API_WEATHER)
              .then(response => response.json())
              .then(rsp => {
                console.log(rsp);
                this.setState({
                  city: rsp.city.name,
                  country: rsp.city.country,
                  temperature: Math.floor(rsp.list[0].main.temp).toFixed(0),
                  time: rsp.list[0].dt,
                  icon: rsp.list[0].weather[0].id,
                  description: rsp.list[0].weather[0].description,
                  humidity: rsp.list[0].main.humidity,
                  wind: Math.floor(rsp.list[0].wind.speed).toFixed(0),
                  dayorn: rsp.list[0].sys.pod,

                  temperature1d: Math.floor(rsp.list[6].main.temp).toFixed(0),
                  temperature2d: Math.floor(rsp.list[14].main.temp).toFixed(0),
                  temperature3d: Math.floor(rsp.list[22].main.temp).toFixed(0),
                  temperature4d: Math.floor(rsp.list[30].main.temp).toFixed(0),
                  temperature5d: Math.floor(rsp.list[38].main.temp).toFixed(0),
                  icon1d: rsp.list[6].weather[0].id,
                  icon2d: rsp.list[14].weather[0].id,
                  icon3d: rsp.list[22].weather[0].id,
                  icon4d: rsp.list[30].weather[0].id,
                  icon5d: rsp.list[38].weather[0].id,
                  wday1: moment.unix(rsp.list[6].dt).format('dd'),
                  wday2: moment.unix(rsp.list[14].dt).format('dd'),
                  wday3: moment.unix(rsp.list[22].dt).format('dd'),
                  wday4: moment.unix(rsp.list[30].dt).format('dd'),
                  wday5: moment.unix(rsp.list[38].dt).format('dd'),

                  wind1h: rsp.list[1].wind.speed,
                  wind2h: rsp.list[2].wind.speed,
                  wind3h: rsp.list[4].wind.speed,

                  humidity1h: rsp.list[1].main.humidity,
                  humidity2h: rsp.list[2].main.humidity,
                  humidity3h: rsp.list[4].main.humidity,

                  icon1h: rsp.list[1].weather[0].id,
                  icon2h: rsp.list[2].weather[0].id,
                  icon3h: rsp.list[3].weather[0].id,

                  time1: rsp.list[1].dt,
                  time2: rsp.list[2].dt,
                  time3: rsp.list[3].dt,

                  temperature1h: Math.floor(rsp.list[1].main.temp),
                  temperature2h: Math.floor(rsp.list[2].main.temp),
                  temperature3h: Math.floor(rsp.list[3].main.temp),
                  description1h: rsp.list[1].weather[0].description,
                  description2h: rsp.list[2].weather[0].description,
                  description3h: rsp.list[3].weather[0].description,
                  error: ""
                });
              }).catch(error => {
                console.log(error);
              });
          });
      },
      error => this.setState({ error: "Could not find your location, Try seaching." }),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 5
      }
    );
  } 

  getLocationSun = async (e) => {

    this.watchId = navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        },
          () => {
            var lat = `${this.state.latitude}`;
            var lon = `${this.state.longitude}`;
            let API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

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
    const getSun = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const sun = await getSun.json();
    const getDataBySearch = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await getDataBySearch.json();
    // if (city && country)
    // const getDataBySearch = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
  
    if (city) {
      this.setState({
        city: data.city.name,
        country: data.city.country,
        temperature: Math.floor(data.list[0].main.temp).toFixed(0),
        time: data.list[0].dt,
        icon: data.list[0].weather[0].id,
        description: data.list[0].weather[0].description,
        humidity: data.list[0].main.humidity,
        wind: data.list[0].wind.speed,
        sunrise: sun.sys.sunrise,
        sunset: sun.sys.sunset,
        temperature1d: Math.floor(data.list[6].main.temp).toFixed(0),
        temperature2d: Math.floor(data.list[14].main.temp).toFixed(0),
        temperature3d: Math.floor(data.list[22].main.temp).toFixed(0),
        temperature4d: Math.floor(data.list[30].main.temp).toFixed(0),
        temperature5d: Math.floor(data.list[38].main.temp).toFixed(0),
        icon1d: data.list[6].weather[0].id,
        icon2d: data.list[14].weather[0].id,
        icon3d: data.list[22].weather[0].id,
        icon4d: data.list[30].weather[0].id,
        icon5d: data.list[38].weather[0].id,
        dayorn: data.list[0].sys.pod,
        humidity1h: data.list[1].main.humidity,
        humidity2h: data.list[2].main.humidity,
        humidity3h: data.list[4].main.humidity,
        wind1h: data.list[1].wind.speed,
        wind2h: data.list[2].wind.speed,
        wind3h: data.list[4].wind.speed,
        icon1h: data.list[1].weather[0].id,
        icon2h: data.list[2].weather[0].id,
        icon3h: data.list[3].weather[0].id,
        time1: data.list[1].dt,
        time2: data.list[2].dt,
        time3: data.list[3].dt,
        temperature1h: Math.floor(data.list[1].main.temp),
        temperature2h: Math.floor(data.list[2].main.temp),
        temperature3h: Math.floor(data.list[3].main.temp),
        description1h: data.list[1].weather[0].description,
        description2h: data.list[2].weather[0].description,
        description3h: data.list[3].weather[0].description,
        error: undefined
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
        time1: undefined,
        time2: undefined,
        time3: undefined,
    
        dayorn: undefined,
        icon1h: undefined,
        icon2h: undefined,
        icon3h: undefined,
    
        humidity1h: undefined,
        humidity2h: undefined,
        humidity3h: undefined,
      
        wind1h: undefined,
        wind2h: undefined,
        wind3h: undefined,
        temperature1h: undefined,
        temperature2h: undefined,
        temperature3h: undefined,
        description1h:undefined,
        description2h:undefined,
        description3h:undefined,

        error: "Please search for a city."
      });
    }
  }

  reload = async (e) => {
    window.location.reload();
  }

  render() {
    return (
      <div id={this.state.dayorn}>
        <Search getWeather={this.getWeather} reload={this.reload} />
        <Today
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          icon={this.state.icon}
          description={this.state.description}
          humidity={this.state.humidity}
          wind={this.state.wind}
          time={this.state.time}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}

          time1={this.state.time1}
          time2={this.state.time2}
          time3={this.state.time3}
          wind1h={this.state.wind1h}
          wind2h={this.state.wind2h}
          wind3h={this.state.wind3h}
          humidity1h={this.state.humidity1h}
          humidity2h={this.state.humidity2h}
          humidity3h={this.state.humidity3h}
          temperature1h={this.state.temperature1h}
          temperature2h={this.state.temperature2h}
          temperature3h={this.state.temperature3h}
          icon1h={this.state.icon1h}
          icon2h={this.state.icon2h}
          icon3h={this.state.icon3h}

          description1h={this.state.description1h}
          description2h={this.state.description2h}
          description3h={this.state.description3h}
          error={this.state.error}
        />

        <Scroll
        error={this.state.error}
        />

        <Week
          temperature1d={this.state.temperature1d}
          temperature2d={this.state.temperature2d}
          temperature3d={this.state.temperature3d}
          temperature4d={this.state.temperature4d}
          temperature5d={this.state.temperature5d}
          icon1d={this.state.icon1d}
          icon2d={this.state.icon2d}
          icon3d={this.state.icon3d}
          icon4d={this.state.icon4d}
          icon5d={this.state.icon5d}
          wday1={this.state.wday1}
          wday2={this.state.wday2}
          wday3={this.state.wday3}
          wday4={this.state.wday4}
          wday5={this.state.wday5}
        />

      </div>
    );
  }
}

export default App;
