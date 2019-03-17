import React, { Component } from 'react';
import './App.css';

import Search from './components/nav/Search'
import Today from './components/weather-card/Today'
import Week from './components/weather-card/Week'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faFrown,faTint,faWind, faLocationArrow, faSun,faCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faSearch,faFrown,faTint,faWind, faLocationArrow, faSun,faCircle)


class App extends Component {



  render() {
    return (
      <div>
        <Search />
        <Today />
        {/* <Week /> */}
      </div>
    );
  }
}

export default App;
