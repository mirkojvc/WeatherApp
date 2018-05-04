/* eslint-disable */
import * as types from './actionTypes';
import  WeatherService from '../services/WeatherService';

export  function fetchCityWeather(cities = []) {
    return async(dispatch, getState) => {
        try{
                const city_weather = await WeatherService.getWeatherByCity(cities);
                dispatch({type: types.CITY_WEATHER_FETCHED, city_weather});
        } catch (error) {
            console.log(error);
        }
    }
}

export function addCityToState(city) {
    return (dispatch, getSatate) => {
        dispatch({type: types.SELECTED_CITY_ADDED, city});
    };
}

export function removeCityFromState(city) {
    return (dispatch, getSatate) => {
        dispatch({type: types.SELECTED_CITY_REMOVED, city});
    };
}


export function getCities() {
    return (dispatch, getSatate) => {
        const cities = WeatherService.getCities();
        dispatch({type: types.CITIES_FETCHED, cities});
    };
}
