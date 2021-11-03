import React from 'react';
import DropDownMenu from './dropdown_menu'

class HomepageNavbarDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleClick(event) {
    const newState = !this.state.visibility
    this.setState({visibility: newState})
  }

  render() {
    const { logout, currentUser } = this.props
    
    return (
      <div>
        <button 
          onFocus={this.handleClick}
          onBlur={this.handleClick}
          className='dd-button'
        >
          
          <img src={window.window.account_icon} alt="" className='account-icon'/>

          <div className='dd-username'>
            {currentUser.username}
          </div>
          
          <img src={window.dropdown_arrow} alt="" className='dropdown-arrow'/>
          
          { this.state.visibility ? <DropDownMenu logout={this.props.logout} className='dd-menu'/> : null}
        </button>
      </div>
    )
  }
}

export default HomepageNavbarDropDown;