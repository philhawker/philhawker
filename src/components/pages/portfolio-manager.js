import React, {Component} from 'react'

// call api
// bring portfolio items in
// update state
// make all of this happen automatically using lifecycle hook


export default class PortfolioManager extends Component {
    render () {
        return (
            <div className='portfolio-manager-wrapper'>
                <div className='left-column'>
                    <h1>Portfolio form</h1>
                </div>

                <div className='right-column'>
                    <h1>Portfolio sidebar</h1>
                </div>
            </div>
        )
    }
}