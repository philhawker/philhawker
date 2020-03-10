import React, { Component } from 'react'
import ReactModal from 'react-modal'

export default class BlogModal extends Component {
    constructor(props) {
        super(props)


        this.customStyles = {    //this "in-line styling" needs to be used with the modal library in react
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