import React from 'react';

const Weather = props => (
    <div classname="weather__info">
     { 
        props.city && props.country && <p classname="weather__key"> Location:
        <span classname="weather__value"> { props.city }, { props.country}</span>
        </p>
     }
     { 
         props.temperature && <p classname="weather__key">Temperature: 
         <span classname="weather__value"> { props.temperature }</span>
         </p> 
     }
     { 
         props.humidity && <p classname="weather__key">Humidity: 
         <span classname="weather__value"> { props.humidity }</span>
         </p> 
     }
     { 
         props.description && <p classname="weather__key">Conditions: 
         <span classname="weather__value"> { props.description }</span>
         </p> 
     }  
     { 
         props.error && <span classname="weather__error">{ props.error } </span> 
     }
    </div>
);
        
export default Weather;