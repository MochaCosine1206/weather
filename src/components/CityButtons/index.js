import React from "react";
import "./style.css";




export function CityButtons(props) {
    return (
        <div className="row">
        {props.cities.map(city => (
            <button
            name="city"
            value={city}
            type="button" 
            className="btn btn-outline-secondary"
            onClick={e => props.submit(city)}
            >
            {city}
            </button>
        ))}
            
        </div>
    );
}


export default CityButtons