import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogItems: []
        };


        this.getBlogItems = this.getBlogItems.bind(this);
    }

    getBlogItems() {
        axios.get('https://philhawker.devcamp.space/portfolio/portfolio_blogs', { withCredentials: true }
        ).then(response => {
            this.setState({
                blogItems: response.data.portfolio_blogs
            })
        }).catch(error => {
            console.log('getBlogItem error', error);
        });
    }

    componentWillMount() {
        this.getBlogItems();
    }

    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <h1>{ blogItem.title }</h1>
        })

        return <div>{ blogRecords }</div>
    }
}

export default Blog;