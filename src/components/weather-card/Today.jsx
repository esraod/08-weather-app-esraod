import React from "react";
import WeatherIcon from "react-icons-weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Timestamp = require('react-timestamp');


const Today = props => (

    <div className="weather-content">
    
        <div className="flex-one">
            {props.city && props.country && props.time && (
            <div className="weather-item">
                <p className="weather-value time"><Timestamp utc={false}time={ props.time } format='time' /></p>
                <p className="weather-value city">{ props.city }</p>
                <p className="weather-value country">{ props.country }</p>
            </div>
            )}
            {props.temperature && (
            <div className="weather-item">
            <h2 className="weather-value temp">{ props.temperature }<span className="celsius">°C</span></h2>
            </div>
            )}
        </div>

        <div className="flex-two">
            <div className="weather-item">
                {props.icon && (
                <div className="weather-value icon">
                    <WeatherIcon
                    name="owm"
                    iconId={`${props.icon}`}
                    flip="horizontal"
                    rotate="90"
                    style={{ lineHeight: 1.45 }}
                    />
                </div>
                )}
            </div>
            {props.description  && ( 
            <div className="weather-item">
                <p className="weather-value desc">{ props.description}</p>
            </div>
            )}
        </div>

        <div className="flex-three">
            {props.sunrise&& (
                <div className="weather-item-small">
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="wind"><Timestamp utc={false}time={ props.sunrise } format='time' /></div>
            </div>
            )}
            {props.wind && (
            <div className="weather-item-small">
                <FontAwesomeIcon className="icon-small-desc" icon="wind" />{" "}
                <div className="wind">{ props.wind }m/s</div>
            </div>
            )}
            {props.humidity && (
            <div className="weather-item-small">
                <FontAwesomeIcon className="icon-small-desc" icon="tint" />
                <div className="wind">{ props.humidity }% </div>
            </div>
            )}
            {props.sunset&& (
            <div className="weather-item-small">
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />
                <div className="wind"><Timestamp utc={false}time={ props.sunset } format='time' /></div>
            </div>
            )}
          
        </div>


    </div>
)

export default Today;