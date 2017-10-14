import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import AboutModal from '../components/AboutModal';
import ModalButton from '../components/ModalButton';
class App extends Component {
  constructor(){
    super();
    this.state = {showAbout: false}
  } 
  toggleAbout() {
    this.setState((prevState, props) => {
        return {
            showAbout: !prevState.showAbout
        }
    });
  }
  render() {
    return (
      <div className="App">
        <Menu toggleAbout={this.toggleAbout.bind(this)}/>
        <AboutModal showAbout={this.state.showAbout} toggleAbout={this.toggleAbout.bind(this)}/>
        <ModalButton toggleAbout={this.toggleAbout.bind(this)} />
      </div>
    );
  }
}

export default App;