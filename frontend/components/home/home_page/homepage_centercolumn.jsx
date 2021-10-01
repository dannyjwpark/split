import React from 'react';
import { Link } from 'react-router-dom';

class HomepageCentercolumn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className='center-nav'>
                    <nav className='center-nav-left'>
                        <img className='user-icon' src={window.doge} alt="" />
                        <p></p>
                    </nav>

                    <nav className='center-nav-right'>
                        <Link to="/">
                            <button 
                                className='add-expense-button'
                                // addBill={this.props.addBill} 
                                currentuser={this.props.currentuser}
                            >
                                Add an expense
                            </button>
                        </Link>
                    </nav>
                </nav>
            </div>
        )
    }
}

export default HomepageCentercolumn;