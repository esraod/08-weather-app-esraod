import React from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Week = props => (
    <div className="forecast-content">
        <div className="flex-week">
            {props.temperature1d && (
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">{ props.temperature1d }°C</div>
            </div> 
            )}
            {props.temperature2d && (
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">{ props.temperature2d }°C</div>
            </div> 
            )}
            {props.temperature3d && (
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">{ props.temperature3d }°C</div>
            </div> 
            )}
            {props.temperature4d && (
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">{ props.temperature4d }°C</div>
            </div> 
            )}
            {props.temperature5d && (
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">{ props.temperature5d }°C</div>
            </div> 
            )}
         

            
        </div>
    </div>
)

export default Week;