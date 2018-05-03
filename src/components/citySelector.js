/* eslint-disable */
import React, {Component} from 'react';
import * as actions from '../redux/actions';
import * as reducer from '../redux/reducer';
import {connect} from 'react-redux';

class CitySelector extends Component {
    constructor(props) {
       super(props);
       this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(actions.getCities());
    }

    onChange(event) {
        let city_id = parseInt(event.currentTarget.value,  10);

        this.props.dispatch(actions.fetchCityWeather(city_id))
    }

    render() {
        const cities = this.props.cities;
        const isLoading = this.props.fetching_cities;
        if(!isLoading) {
            return(<div>Loading...</div>)
        } else {
            return (cities.map(city => {
                return(
                    <div>
                        <label>{city}</label>
                        <input type = "checkbox" value = "{city}"/>
                    </div>
                );
            }))
        }
    }

    
}

const mapStateToProps = (state, ownProps) => {
    const cities = reducer.getCities(state);
    console.log(cities);
    return {
        cities: state.cities,
        fetching_cities: state.fetching_cities
    };
}

export default connect(mapStateToProps)(CitySelector);
