import React, { Component } from 'react'
import ReactModal from 'react-modal'

import BlogForm from '../blog/blog-form'

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
                transform: 'translate(-50%, -50%',
                width: '1000px'
            },
            overlay: {
                backgroundColor: 'rgba(1, 1, 1, 0.75)'
            }
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
    }

    handleSuccessfulFormSubmission(blog) {
        this.props.handleSuccessfulNewBlogSubmission(blog)
    }

    render() {
        return (
            <ReactModal
                style={this.customStyles}
                onRequestClose={() => {
                    this.props.handleModalClose()
                }} isOpen={this.props.modalIsOpen}>
                <BlogForm handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission} />
            </ReactModal>
        )
    }
}
