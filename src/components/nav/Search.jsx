import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Form = props => (
    <div className="searchForm" onSubmit={props.getWeather}>
      <form className="searchInput">
        <input type="text" name="city" placeholder="City.." />
        {/* <input type="text" name="country" placeholder="Country.." /> */}
        <button>
          <div>
            <FontAwesomeIcon icon="search" />
          </div>
        </button>
        <button name="location">
          <div>
            <FontAwesomeIcon icon="location-arrow" />
          </div>
        </button>     
      </form>
    </div>
  );
  
  export default Form;