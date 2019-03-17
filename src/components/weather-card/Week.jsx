import React from 'react';

import WeatherIcon from "react-icons-weather";



const Week = props => (
    <div className="forecast-content">
        <div className="flex-week">
            {props.temperature1d && props.icon1d &&(
            <div className="forecast-item">
                <div className="day">T</div>
                    <WeatherIcon
                    className="smallicon"
                    name="owm"
                    iconId={`${props.icon1d}`}
                    flip="horizontal"
                    rotate="90"
                    style={{ lineHeight: 1.45 }}
                    />
                <div className="week-temp">{ props.temperature1d }°C</div>
            </div> 
            )}
            {props.temperature2d && props.icon2d && (
            <div className="forecast-item">
                <div className="day">T</div>
                    <WeatherIcon
                    className="smallicon"
                    name="owm"
                    iconId={`${props.icon2d}`}
                    flip="horizontal"
                    rotate="90"
                    style={{ lineHeight: 1.45 }}
                    />
                <div className="week-temp">{ props.temperature2d }°C</div>
            </div> 
            )}
            {props.temperature3d && props.icon3d &&(
            <div className="forecast-item">
                <div className="day">T</div>
                    <WeatherIcon
                    className="smallicon"
                    name="owm"
                    iconId={`${props.icon3d}`}
                    flip="horizontal"
                    rotate="90"
                    style={{ lineHeight: 1.45 }}
                    />
                <div className="week-temp">{ props.temperature3d }°C</div>
            </div> 
            )}
            {props.temperature4d && props.icon4d &&(
            <div className="forecast-item">
                <div className="day">T</div>
                    <WeatherIcon
                    className="smallicon"
                    name="owm"
                    iconId={`${props.icon4d}`}
                    flip="horizontal"
                    rotate="90"
                    style={{ lineHeight: 1.45 }}
                    />
                <div className="week-temp">{ props.temperature4d }°C</div>
            </div> 
            )}
            {props.temperature5d && props.icon5d &&(
            <div className="forecast-item">
                <div className="day">T</div>
                    <WeatherIcon
                    className="smallicon"
                    name="owm"
                    iconId={`${props.icon5d}`}
                    flip="horizontal"
                    rotate="90"
                    style={{ lineHeight: 1.45 }}
                    />
                <div className="week-temp">{ props.temperature5d }°C</div>
            </div> 
            )}
         

            
        </div>
    </div>
)

export default Week;