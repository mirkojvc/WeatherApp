/* eslint-disable */
import React, {Component} from 'react';
import * as actions from '../redux/actions';
import * as reducer from '../redux/reducer';
import {connect} from 'react-redux';

class WeatherWidget extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(actions.fetchCityWeather(this.props.selected_cities));
    }

    componentWillReceiveProps(newProps) {
        if(newProps.selected_cities !== this.props.selected_cities) {
            this.props.dispatch(actions.fetchCityWeather(newProps.selected_cities));
        }
    }

    render() {
        const isLoading  = this.props.isLoading;
        const weathers   = this.props.city_weather;
        const selected_cities = this.props.selected_cities;
        if(this.props.selected_cities.length === 0) {
            return(<div>Please select a city</div>)
        } else if(!isLoading) {
            return (<div>Loading...</div>);
        } else if (weathers === []) {
            return(<div>No information yet</div>)
        }else {
            return(
                <div>
                    {weathers.map((weather) => {
                        return (
                            <div className = "weather_widget__single" key={ weather.name }>
                                <h1>{weather.name}</h1>
                                <p>{weather.weather.main}</p>
                                <p>{weather.weather.description}</p>
                                <p>Avrage temperature: {weather.main.temp}</p>
                                <p>Min temperature: {weather.main.temp_min}</p>
                                <p>Max temperature: {weather.main.temp_max}</p>
                                <p>Wind speed : {weather.wind.speed}, degrees: {weather.wind.deg}</p>
                            </div>
                            );
                    })}
                </div>
            );
        }
    }



}

const mapStateToProps = (state, ownProps) => {
    const city_weather = reducer.getWeather(state);
    const selected_cities = reducer.getSelectedCities(state);
    return {
        city_weather: state.city_weather,
        selected_cities: state.selected_cities,
        isLoading: state.fetching_weather,
    };
}

export default connect(mapStateToProps)(WeatherWidget);
