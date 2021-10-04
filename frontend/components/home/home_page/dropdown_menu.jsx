import React from 'react';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <ul className='dropdown-menu'>
        <li onClick={() => this.props.logout()} className='logout-list'>
          Log out
        </li>
      </ul>
    )
  }
}

export default DropDownMenu;