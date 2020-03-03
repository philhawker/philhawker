import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router' // higher order component. noticed it isnt capatalized
import { NavLink } from 'react-router-dom'

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='nav-link-wrapper'>
                <NavLink to={route} activeClassName='nav-link-active'>
                    {linkText}
                </NavLink>
            </div>
        )
    }

    const handleSignOut = () => {
        axios.delete('https://api.devcamp.space/logout', {withCredentials: true}).then(response => {
            if (response.status === 200) {  //should always send a 200 status if the delete was successful
                props.history.push('/')
                props.handleSuccessfulLogout()
            }
            return response.data  // this isnt actually returning anything. its poor practice to not include some type of response after IF statement
        }).catch( error => {
            console.log('Error signing out', error)
        })
    }

    return (
        <div className='nav-wrapper'>
            <div className='left-side'>
                <div className='nav-link-wrapper'>
                    <NavLink exact to='/' activeClassName='nav-link-active'>
                        Home
                    </NavLink>
                </div>

                <div className='nav-link-wrapper'>
                    <NavLink to='/about-me' activeClassName='nav-link-active'>
                        About
                    </NavLink>
                </div>

                <div className='nav-link-wrapper'>
                    <NavLink to='/contact' activeClassName='nav-link-active'>
                        Contact
                    </NavLink>
                </div>

                <div className='nav-link-wrapper'>
                    <NavLink to='/blog' activeClassName='nav-link-active'>
                        Blog
                    </NavLink>
                </div>

                {props.loggedInStatus === 'LOGGED_IN' ? dynamicLink('/portfolio-manager', 'Portfolio Manager') : null}
            </div>

            <div className='right-side'>
            PHIL M. HAWKER

            {props.loggedInStatus === 'LOGGED_IN' ? <a onClick={handleSignOut}>
                <FontAwesomeIcon icon='sign-out-alt' />
            </a> : null}
            </div>
        </div>
        )
    }

export default withRouter(NavigationComponent)
