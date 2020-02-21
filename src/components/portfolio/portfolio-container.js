import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log('Portfolio Container has rendered');
    }

    portfolioItems() {
        const data = ['Vivint', 'Vox', 'Grove Creek'];

        return data.map(item => {
            return <PortfolioItem title={ item } url={ 'Google.com' } />;

        });

    }

    render() {
        return (
            <div className='PortfolioConatiner'>
                <h2>portfolio conatiner goes here</h2>

                { this.portfolioItems() }
            </div>
        );
    }
};;;