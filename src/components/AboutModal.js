import React, {PureComponent} from "react";
import AboutText from './AboutText';
import {
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';

class AboutModal extends PureComponent {
    render(){
        return(<Modal isOpen={this.props.showAbout} toggle={this.props.toggleAbout}>
            <ModalHeader toggle={this.props.toggleAbout}>
                About
            </ModalHeader>
            <ModalBody>
                <AboutText />
            </ModalBody>
          </Modal>)
    }
}

export default AboutModal;