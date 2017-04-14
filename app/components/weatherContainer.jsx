import { connect } from 'react-redux';
import React, { Component } from 'react';
import WeatherForm from './weatherForm';
import {getForcast,getLocation} from '../reducers/weather.jsx';
const mapDispatchToProps = (dispatch) => {
  return{
    location(location){
      dispatch(getLocation(location))
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
    //this.props.forcast(this.state.inputValue)
    this.props.location(this.state.inputValue)
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
