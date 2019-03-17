import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Scroll = props => (

<div className="hourForm">
{props.error && <div className="error">{props.error}</div>}
    <form className="hourOptions">
    <a className="optionBtn" href='#hour'>
    
        <div>
          <FontAwesomeIcon  icon="circle" />
        </div>
 
      </a>
      <a className="optionBtn" href='#hour1'>
     
        <div>
          <FontAwesomeIcon icon="circle" />
        </div>
  
      </a>
      <a className="optionBtn" href='#hour2'>
     
        <div>
          <FontAwesomeIcon icon="circle" />
        </div>

      </a>
      <a className="optionBtn" href='#hour3'>
 
        <div>
          <FontAwesomeIcon icon="circle" />
        </div>

      </a>


   
    
    </form>
  </div>



    );

export default Scroll;