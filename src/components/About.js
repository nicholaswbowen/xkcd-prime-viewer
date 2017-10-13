import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';

class About extends Component {
   constructor(props) {
       super(props);
       this.state = {
           modal: this.props.show
       };

       this.toggle = this.toggle.bind(this);
   }

   render() {
       return (
           <div>

           </div>
       )
   }
}

export default About;