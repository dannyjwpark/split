import React from 'react';
import { Link } from 'react-router-dom';

class HomepageNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleClick(e){
        const visibility = !this.state.visible
        this.setState({ visible: visibility})
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        // debugger;
        // const userid=this.getState().session.id;
        // const username=this.getState().entities.users[userid].username;
        return (
            <div>
                <div className='homepage-nav'>
                    <nav className='homepage-nav-elements'>
                        <nav className='left-homepage-nav'>
                            <Link to="/home" className='homepage-word-logo'>
                                <img className='homepage-nav-logo' src={window.logo_signup} alt="" />
                                .split()
                            </Link>
                        </nav>

                        <div className='empty'></div>

                        <nav className='right-homepage-nav'>
                            <img className='account_icon' src={window.account_icon} alt="" />
                            <nav className='user-dropdown'>
                                <button 
                                    className='user-dropdown-button' 
                                    currentuser={this.props.currentuser}
                                    logout={this.props.logout} 
                                >
                                    {/* <p className='username-text'> username </p> */}
                                    {/* <p className='username-text'> {username} </p> */}
                                    <p className='username-text'> {this.props.currentuser.username} </p>
                                    <img className='user-dropdown-icon' src={window.dropdown_arrow} alt="" />
                                </button>
                            </nav>
                        </nav>
                    </nav>
                </div>
            </div>
        )
    }
}

export default HomepageNavbar;