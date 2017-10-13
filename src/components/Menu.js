import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';
import AboutText from './AboutText';

class Menu extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showAbout: false
      }

      this.toggleAbout = this.toggleAbout.bind(this);
  }

  toggleAbout(e) {
    e.preventDefault();
    this.setState((prevState, props) => {
        return {
            showAbout: !prevState.showAbout
        }
    });
  }

  render() {
    return (
      <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">xkcd Prime Viewer</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#" onClick={(e) => { this.toggleAbout(e)} }>About</NavLink>
                </NavItem>
            </Nav>
          </Navbar>
          <Modal isOpen={this.state.showAbout} toggle={this.toggleAbout}>
            <ModalHeader toggle={this.toggleAbout}>
                About
            </ModalHeader>
            <ModalBody>
                <AboutText />
            </ModalBody>
          </Modal>
      </div>
    );
  }
}

export default Menu;