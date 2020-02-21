import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log('Portfolio Container has rendered');
    }
    render() {
        return (
            <div className='PortfolioConatiner'>
                <h2>portfolio conatiner goes here</h2>

                <PortfolioItem />
            </div>
        );
    }
}