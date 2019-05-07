import axios from "axios";
import keys from "./keys"

export default {
    
getWeather: function (city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=${keys.openWeather.APIKEY}`)
}

};


