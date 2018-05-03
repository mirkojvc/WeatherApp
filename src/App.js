/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import WeatherWidget from './components/weatherWidget';
import CitySelector  from './components/citySelector';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './redux/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,  composeEnhancers(
    applyMiddleware(thunk)
  ));

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div>
          <CitySelector />
          <WeatherWidget />
        </div>
      </Provider>
    );
  }
}

export default App;
