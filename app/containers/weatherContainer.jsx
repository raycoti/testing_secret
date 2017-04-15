import { connect } from 'react-redux';
import React, { Component } from 'react';
import WeatherForm from '../components/weatherForm';
import {getLocation} from '../actionCreators/location';
const mapDispatchToProps = (dispatch) => {
  return {
    setLocation(location){
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
    value !== "" ? this.setState({inputValue: value,
    dirty: true}) : this.setState({inputValue: value,
    dirty: false})

  }
  handleSubmit(e){
    e.preventDefault();
    this.props.setLocation(this.state.inputValue)
    this.setState({
      inputValue:'',
      dirty: false,
    })
  }

  render(){
    
    return (
      <WeatherForm handleChange={this.handleChange} inputValue={this.state.inputValue} handleSubmit={this.handleSubmit} dirty={this.state.dirty} />
    )
  }


}

export default connect(null, mapDispatchToProps)(WeatherContainer);
