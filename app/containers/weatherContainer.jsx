import { connect } from 'react-redux';
import React, { Component } from 'react';
import WeatherForm from '../components/weatherForm';
import {getLocation, getSearches, addToSearch} from '../actionCreators/location';
const mapDispatchToProps = (dispatch) => {
  return {
    setLocation(location){
      dispatch(getLocation(location))
    },
    getQueries(){
      dispatch(getSearches());
    },
    addToQuery(name){
      dispatch(addToSearch(name));
    }
  }
}
const mapStateToProps = (state) => {
  return {
    searchHistory: state.location.searches,
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
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.getQueries();
  }

  handleChange(event){
    const value = event.target.value;
    let isDirty = true;
    if (value === '') isDirty = false;
    this.setState({inputValue: value,
    dirty: isDirty})
  }

  handleSelect(event){
    const value = event.target.value;
    if (value === 'searches') return;
    this.setState({inputValue: value, dirty: true});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.setLocation(this.state.inputValue);
    this.props.addToQuery(this.state.inputValue);
    this.setState({
      inputValue: '',
      dirty: false,
    })
  }

  render(){
    return (
      <WeatherForm history={this.props.searchHistory} handleSelect = {this.handleSelect} handleChange={this.handleChange} inputValue={this.state.inputValue} handleSubmit={this.handleSubmit} dirty={this.state.dirty} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
