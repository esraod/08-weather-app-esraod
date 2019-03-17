import React from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Week = props => (
    <div className="forecast-content">
        <div className="flex-week">
            
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">9°C</div>
            </div> 
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">9°C</div>
            </div> 
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">9°C</div>
            </div> 
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">9°C</div>
            </div> 
            <div className="forecast-item">
                <div className="day">T</div>
                <FontAwesomeIcon className="icon-small-desc" icon="sun" />{" "}
                <div className="week-temp">9°C</div>
            </div> 

            
        </div>
    </div>
)

export default Week;