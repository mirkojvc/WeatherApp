/* eslint-disable */
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const InitialState = Immutable({
    city_weather: [],
    fetching_weather: false,
    fetching_cities: false,
    city: 1,
    cities: [],
    selected_cities: [],
});

export default function reducer(state = InitialState, action = {}) {

    switch(action.type) {
        case types.CITY_WEATHER_FETCHED:
            return state.merge({
                city_weather: action.city_weather,
                fetching_weather: true,
            });
        case types.CITIES_FETCHED:
        return state.merge({
            cities: action.cities,
            fetching_cities: true,
        });
        case types.SELECTED_CITY_ADDED:
        return state.merge({
            selected_cities: [...state.selected_cities, action.city],
        });
        case types.SELECTED_CITY_REMOVED:
        let cities = state.selected_cities.filter(city => city !== action.city);
        return state.merge({
            selected_cities: cities,
        });
        default:
            return state;
    }
}

export function getWeather(state = InitialState) {
    return state.city_weather;
}

export function getSelectedCities(state = InitialState) {
    return state.selected_cities;
}


export function getCities(state = InitialState) {
    return state.cities;
}
