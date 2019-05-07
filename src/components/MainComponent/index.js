import React, { Component } from "react";
import API from "../../utils/API";
import CityButtons from "../CityButtons/index"
import JumboGraph from "../JumboGraph/index"
import "./style.css";


class MainComponent extends Component {
    state = {
        weather: [],
        city: "New York",
        cityList: ["New York", "Dallas", "Seattle", "Chicago", "Miami"]
    };

    componentDidMount() {
        API.getWeather(this.state.city)
            .then(res => {
                this.setState({ weather: res.data.list, city: res.data.city.name })
            })
    }

    getWeather = (city) => {
        API.getWeather(city)
        .then(res => {
            this.setState({ weather: res.data.list })
        })
        .catch(err => console.log(err))
    } 

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    handleButttonSubmit = (event) => {
        this.setState({ city: event })
        this.getWeather(event);
    };

    render() {

        return (
            <div>
                <div className="container" id="mainWrapper">
                    <CityButtons
                        cities={this.state.cityList}
                        submit={this.handleButttonSubmit}

                    />
                    <JumboGraph
                        weatherData={this.state.weather}
                        city={this.state.city}
                    />
                </div>
            </div>
        );
    }

}

export default MainComponent;
