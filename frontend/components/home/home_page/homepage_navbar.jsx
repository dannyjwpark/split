import React from 'react';
import { Link } from 'react-router-dom';

class HomepageNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <header className='homepage-nav'>
                    <nav className='homepage-nav-elements'>
                        <nav className='left-homepage-nav'>
                            <img className='homepage-nav-logo' src={window.logo_signup} alt="" />
                            <Link to="/home" className='homepage-word-logo'>.split()</Link>
                        </nav>

                        <nav className='right-homepage-nav'>
                            <Link to="/">
                                <button className='homepage-logout-button' logout={this.props.logout} currentuser={this.props.currentuser}>
                                    Log out
                                </button>
                            </Link>
                        </nav>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HomepageNavbar;