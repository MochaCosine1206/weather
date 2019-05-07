import React, { Component } from "react";
import API from "../../utils/API";
import JumboGraph from "../JumboGraph/index"
import "./style.css";


class MainComponent extends Component {
    state = {
        weather : [],
        city: "",
        cityList: ["New_York", "Dallas", "Seattle", "Chicago", "Miami"]
    };

    componentDidMount() {
        API.getWeather()
        .then(res => {
            if(res.data) {
                console.log(res.data)
            }
            this.setState({ weather : res.data.list, city : res.data.city.name })
        })
    }

    render() {
        if(!this.state.weather) {
            return null
        } else {
            console.log(this.state.weather.list)
        }
        
        return (
            <div>
                <JumboGraph 
                weatherData={this.state.weather}
                city={this.state.city}
                />
            </div>
        );
    }

}

export default MainComponent;