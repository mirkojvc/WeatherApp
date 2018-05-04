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
        let city = event.currentTarget;
        if(city.checked) {
            this.props.dispatch(actions.addCityToState(city.value))
        } else {
            this.props.dispatch(actions.removeCityFromState(city.value))
        }

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
                        <input type = "checkbox" key={city} value ={city} onChange = {this.onChange}/>
                    </div>
                );
            }))
        }
    }

    
}

const mapStateToProps = (state, ownProps) => {
    const cities = reducer.getCities(state);
    const selected_cities = reducer.getSelectedCities(state);
    return {
        cities: state.cities,
        fetching_cities: state.fetching_cities,
        selected_cities: state.selected_cities,
    };
}

export default connect(mapStateToProps)(CitySelector);
