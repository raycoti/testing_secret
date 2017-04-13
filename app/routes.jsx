import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store';
import App from './components/app';

export default () => {
  return (
    <Provider store={store}>
      <Router>
      <Route exact path="/" component={App} />
      </Router>
    </Provider>
  )
}
