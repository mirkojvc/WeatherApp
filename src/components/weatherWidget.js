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
        this.props.dispatch(actions.fetchCityWeather());
    }
    render() {
        const isLoading = this.props.isLoading;
        if(!isLoading) {
            return (<div>Loading...</div>);
        } else {
            return (
            <div className = "weather_widget__single">
                <h1>{this.props.city_weather.name}</h1>
                <p>{this.props.city_weather.weather.main}</p>
                <p>{this.props.city_weather.weather.description}</p>
                <p>Avrage temperature: {this.props.city_weather.main.temp}</p>
                <p>Min temperature: {this.props.city_weather.main.temp_min}</p>
                <p>Max temperature: {this.props.city_weather.main.temp_max}</p>
                <p>Wind speed : {this.props.city_weather.wind.speed}, degrees: {this.props.city_weather.wind.deg}</p>
            </div>
            );
        }
    }



}

const mapStateToProps = (state, ownProps) => {
    const city_weather = reducer.getWeather(state);
    return {
        city_weather: state.city_weather,
        isLoading: state.fetching_weather,
    };
}

export default connect(mapStateToProps)(WeatherWidget);
