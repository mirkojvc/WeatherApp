/* eslint-disable */
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const InitialState = Immutable({
    city_weather: [],
    fetching_weather: false,
    fetching_cities: false,
    city: 1,
    cities: [],
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
        default:
            return state;
    }
}

export function getWeather(state = InitialState) {
    return state.city_weather;
}


export function getCities(state = InitialState) {
    return state.cities;
}
