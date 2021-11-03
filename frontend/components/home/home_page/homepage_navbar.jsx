import React from 'react';
import { Link } from 'react-router-dom';
import HomepageNavbarDropDown from './homepage_navbar_dropdown'

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
              <p className='homepage-word-text'>.split()</p>
            </Link>
          </nav>

          <div className='empty'></div>

          <nav className='right-homepage-nav'>
            <nav className='user-dropdown' onClick={this.handleClick}>
              <div 
                className='user-dropdown-button' 
                // currentuser={this.props.currentuser}
                // logout={this.props.logout} 
              >
                <HomepageNavbarDropDown logout={this.props.logout} currentUser={this.props.currentUser} />
                {/* <p className='username-text'> {this.props.currentuser.username} </p>
                <img className='user-dropdown-icon' src={window.dropdown_arrow} alt="" currentuser={this.props.currentuser} logout={this.props.logout}/> */}
              </div>
            </nav>
          </nav>
        </nav>
      </div>
    </div>
  )
  }
}

export default HomepageNavbar;