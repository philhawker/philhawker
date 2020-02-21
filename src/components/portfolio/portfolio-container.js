import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: 'Welcome to my portfolio',
            data: [
                { title: 'Vivint' },
                { title: 'Vox' },
                { title: 'Grove Creek' },
            ]
        };

        console.log('Portfolio Container has rendered');
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'Google.com'} />;
        });

    }




    render() {
        return (
            <div className='PortfolioConatiner'>

                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        );
    }
};;;