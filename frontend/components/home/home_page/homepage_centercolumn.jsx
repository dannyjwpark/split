import React from 'react';
import { Link } from 'react-router-dom';
import HomepageNoexpense from './homepage_noexpense'
import { openModal, closeModal } from '../../../actions/modal_actions'

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
                        <p>Dashboard</p>
                    </nav>

                    <nav className='center-nav-right'>
                        <button 
                            className='add-bill-button'
                            // addBill={this.props.addBill} 
                            currentuser={this.props.currentuser}
                            // onClick={() => openModal('addBill')}
                            onClick={() => dispatch(this.props.openModal('addBill'))}
                        >
                            <p className='bill-form-text'>Add an expense</p>
                        </button>

                        <button
                            className='settle-up-button'
                            currentuser={this.props.currentuser}
                        >
                            <p className='bill-form-text'>Settle up</p>
                        </button>
                    </nav>
                </nav>
                <div className='center-contents'>
                    <HomepageNoexpense />
                </div>
            </div>
        )
    }
}

export default HomepageCentercolumn;