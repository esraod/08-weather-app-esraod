import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Today = props => (

    <div className="weather-content">
    
        <div className="flex-one">
            <div className="weather-item">
                <p className="weather-value time">1:00pm</p>
                <p className="weather-value city">Stockholm</p>
                <p className="weather-value country">SE</p>
            </div>
            <div className="weather-item">
            <h2 className="weather-value temp">-3<span className="celsius">°C</span></h2>
            </div>
        </div>

        <div className="flex-two">
            <div className="weather-item">
                <div className="weather-value icon">
                <FontAwesomeIcon className="icon" icon="sun" />{" "}
                </div>
            </div>
            <div className="weather-item">
                <p className="weather-value desc">sunny</p>
            </div>
        </div>

        <div className="flex-three">

            <div className="weather-item-small">
            <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
            <div className="wind">6am</div>
            </div>
        
            <div className="weather-item-small">
            <FontAwesomeIcon className="icon-small-desc" icon="wind" />{" "}
            <div className="wind">4m/s</div>
            </div>

            <div className="weather-item-small">
            <FontAwesomeIcon className="icon-small-desc" icon="tint" />
            <div className="wind">89% </div>
            </div>

            <div className="weather-item-small">
            <FontAwesomeIcon className="icon-small-desc" icon="sun" />
            <div className="wind">6pm</div>
            </div>

        </div>


    </div>
)

export default Today;