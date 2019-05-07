import axios from "axios";
let url = "http://api.openweathermap.org/data/2.5/forecast?id=2643743&units=imperial&APPID=ea5e0c43f629fa52f7b65eb894ba50e7"
//OpenWeatherMap API KEY: ea5e0c43f629fa52f7b65eb894ba50e7

export default {
    
getWeather: function () {
    return axios.get(url)
}

};


