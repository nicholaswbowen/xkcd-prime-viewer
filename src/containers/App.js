import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default App;