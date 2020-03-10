import React, { Component } from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('.app-wrapper')

export default class BlogModal extends Component {
    constructor(props) {
        super(props)


        this.customStyles = {    //this "in-line styling" is suggested to be used with 3rd party libraries in react to make sure non of the defaults overwrite our code
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
            },
            overlay: {
                backgroundColor: 'rgba(1, 1, 1, 0.75)'
            }
        }
    }

    render() {
        return (
            <ReactModal
                style={this.customStyles}
                onRequestClose={() => {
                    this.props.handleModalClose()
                }} isOpen={this.props.modalIsOpen}>
                <h1>in a modal</h1>
            </ReactModal>
        )
    }
}