import React, {PureComponent} from 'react'

class ModalButton extends PureComponent{
    render(){
        return (<button onClick={this.props.toggleAbout}>Toggle Modal</button>)
    }
}

export default ModalButton;