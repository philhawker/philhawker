import React, { Component } from 'react';
import axios from 'axios'

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: 'Welcome to my portfolio',
            isLoading: false,
            data: [
                { title: 'Vivint', category: 'eCommerce', slug: 'vivint' },
                { title: 'Vox', category: 'Scheduling', slug: 'vox' },
                { title: 'Grove Creek Foods', category: 'Enterprise', slug: 'grove-creek-foods' },
                { title: 'Bottega', category: 'eCommerce', slug: 'bottega' }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this)
        this.getPortfolioItems = this.getPortfolioItems.bind()
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    getPortfolioItems() {
        axios.get('https://philhawker.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                console.log('Response Data', response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'Google.com'} slug={item.slug} />;
        });
    }


    render() {
        this.getPortfolioItems()
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>

                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>
                    eCommerce
                </button>
                <button onClick={() => this.handleFilter('Scheduling')}>
                    Scheduling
                </button>
                <button onClick={() => this.handleFilter('Enterprise')}>
                    Enterprise
                </button>

                {this.portfolioItems()}

            </div>
        );
    }
};;;