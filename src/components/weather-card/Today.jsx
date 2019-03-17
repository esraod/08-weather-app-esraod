import React from "react";
import WeatherIcon from "react-icons-weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Timestamp = require('react-timestamp');


const Today = props => (

    <div className="weather-content">
        <div className="hour" id="hour">
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

        <div className="hour1" id="hour1">
            <div className="flex-one">
                {props.city && props.country && props.time1 && (
                <div className="weather-item">
                    <p className="weather-value time"><Timestamp utc={false}time={ props.time1 } format='time' /></p>
                    <p className="weather-value city">{ props.city }</p>
                    <p className="weather-value country">{ props.country }</p>
                </div>
                )}
                {props.temperature1h && (
                <div className="weather-item">
                <h2 className="weather-value temp">{ props.temperature1h }<span className="celsius">°C</span></h2>
                </div>
                )}
            </div>

            <div className="flex-two">
                <div className="weather-item">
                    {props.icon1h && (
                    <div className="weather-value icon">
                        <WeatherIcon
                        name="owm"
                        iconId={`${props.icon1h}`}
                        flip="horizontal"
                        rotate="90"
                        style={{ lineHeight: 1.45 }}
                        />
                    </div>
                    )}
                </div>
                {props.description1h  && ( 
                <div className="weather-item">
                    <p className="weather-value desc">{ props.description1h }</p>
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
                {props.wind1h && (
                <div className="weather-item-small">
                    <FontAwesomeIcon className="icon-small-desc" icon="wind" />{" "}
                    <div className="wind">{ props.wind1h }m/s</div>
                </div>
                )}
                {props.humidity1h && (
                <div className="weather-item-small">
                    <FontAwesomeIcon className="icon-small-desc" icon="tint" />
                    <div className="wind">{ props.humidity1h }% </div>
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

        <div className="hour2" id="hour2">
            <div className="flex-one">
                {props.city && props.country && props.time2 && (
                <div className="weather-item">
                    <p className="weather-value time"><Timestamp utc={false}time={ props.time2 } format='time' /></p>
                    <p className="weather-value city">{ props.city }</p>
                    <p className="weather-value country">{ props.country }</p>
                </div>
                )}
                {props.temperature2h && (
                <div className="weather-item">
                <h2 className="weather-value temp">{ props.temperature2h }<span className="celsius">°C</span></h2>
                </div>
                )}
            </div>

            <div className="flex-two">
                <div className="weather-item">
                    {props.icon2h && (
                    <div className="weather-value icon">
                        <WeatherIcon
                        name="owm"
                        iconId={`${props.icon2h}`}
                        flip="horizontal"
                        rotate="90"
                        style={{ lineHeight: 1.45 }}
                        />
                    </div>
                    )}
                </div>
                {props.description2h  && ( 
                <div className="weather-item">
                    <p className="weather-value desc">{ props.description2h }</p>
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
                {props.wind2h && (
                <div className="weather-item-small">
                    <FontAwesomeIcon className="icon-small-desc" icon="wind" />{" "}
                    <div className="wind">{ props.wind2h }m/s</div>
                </div>
                )}
                {props.humidity2h && (
                <div className="weather-item-small">
                    <FontAwesomeIcon className="icon-small-desc" icon="tint" />
                    <div className="wind">{ props.humidity2h }% </div>
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

        <div className="hour3" id="hour3">
            <div className="flex-one">
                {props.city && props.country && props.time3 && (
                <div className="weather-item">
                    <p className="weather-value time"><Timestamp utc={false}time={ props.time3 } format='time' /></p>
                    <p className="weather-value city">{ props.city }</p>
                    <p className="weather-value country">{ props.country }</p>
                </div>
                )}
                {props.temperature3h && (
                <div className="weather-item">
                <h2 className="weather-value temp">{ props.temperature3h }<span className="celsius">°C</span></h2>
                </div>
                )}
            </div>

            <div className="flex-two">
                <div className="weather-item">
                    {props.icon3h && (
                    <div className="weather-value icon">
                        <WeatherIcon
                        name="owm"
                        iconId={`${props.icon3h}`}
                        flip="horizontal"
                        rotate="90"
                        style={{ lineHeight: 1.45 }}
                        />
                    </div>
                    )}
                </div>
                {props.description3h  && ( 
                <div className="weather-item">
                    <p className="weather-value desc">{ props.description3h }</p>
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
                {props.wind3h && (
                <div className="weather-item-small">
                    <FontAwesomeIcon className="icon-small-desc" icon="wind" />{" "}
                    <div className="wind">{ props.wind3h }m/s</div>
                </div>
                )}
                {props.humidity3h && (
                <div className="weather-item-small">
                    <FontAwesomeIcon className="icon-small-desc" icon="tint" />
                    <div className="wind">{ props.humidity3h }% </div>
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


    </div>
)

export default Today;