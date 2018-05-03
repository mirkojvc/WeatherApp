/* eslint-disable */
import * as types from './actionTypes';
import  WeatherService from '../services/WeatherService';

export  function fetchCityWeather(city_id = 0) {
    return async(dispatch, getState) => {
        try{
                const city_weather = await WeatherService.getWeatherByCity(city_id);
                dispatch({type: types.CITY_WEATHER_FETCHED, city_weather});
        } catch (error) {
            console.log(error);
        }
    }
}


export function getCities() {
    return (dispatch, getSatate) => {
        const cities = WeatherService.getCities();
        dispatch({type: types.CITIES_FETCHED, cities});
    };
}
