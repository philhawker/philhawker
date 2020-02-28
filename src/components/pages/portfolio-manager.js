import React, {Component} from 'react'
import axios from 'axios'

// call api
// bring portfolio items in
// update state
// make all of this happen automatically using lifecycle hook


export default class PortfolioManager extends Component {
    constructor() {
        super()

        this.state = {
            portfolioItems: []
        }
    }

    getPortfolioItems() {
        axios.get('https://philhawker.devcamp.space/portfolio/portfolio_items', {withCredentials: true}
        ).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log('error in getPortfolioItems', error)
        })
    }

    componentDidMount() {
        this.getPortfolioItems()
    }

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