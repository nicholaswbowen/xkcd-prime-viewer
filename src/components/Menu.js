import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
// import AboutText from './AboutText';

class Menu extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           showAbout: false
//       }

//       this.toggleAbout = this.toggleAbout.bind(this);
//   }
  render() {
    return (
      <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">xkcd Prime Viewer</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#" onClick={this.props.toggleAbout}>About</NavLink> 
                    {/* 
                    changed from this.toggleAbout to this.props.toggleAbout. 
                    Including a callback using e is un-neccesary, onClick automatically includes it and hides the preventdefault
                    */}
                </NavItem>
            </Nav>
          </Navbar>
          {/* <Modal isOpen={this.state.showAbout} toggle={this.toggleAbout}>
            <ModalHeader toggle={this.toggleAbout}>
                About
            </ModalHeader>
            <ModalBody>
                <AboutText />
            </ModalBody>
          </Modal> 
          Moved to AboutModal
          */}
      </div>
    );
  }
}

export default Menu;