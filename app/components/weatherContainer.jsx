import { connect } from 'react-redux';
import React, { Component } from 'react';
import WeatherForm from './weatherForm';
import {getForcast} from '../reducers/weather.jsx';
const mapDispatchToProps = (dispatch) => {
  return{
     forcast(location){
       console.log(location);
      dispatch(getForcast(location))
      window.map.setCenter({lat: 43.075284, lng: -89.384318})
    }
  }
}

class WeatherContainer extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: '',
      dirty: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    const value = e.target.value;
    this.setState({inputValue: value,
    dirty: true})
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.forcast(this.state.inputValue)
    this.setState({
      inputValue:'',
      dirty: false,
    })
  }

  render(){
    
    return (
      <WeatherForm handleChange={this.handleChange} inputValue={this.state.inputValue} handleSubmit={this.handleSubmit} />
    )
  }


}

export default connect(null,mapDispatchToProps)(WeatherContainer);
