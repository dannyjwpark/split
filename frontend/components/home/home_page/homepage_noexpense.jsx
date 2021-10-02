import React from 'react';
import { Link } from 'react-router-dom';

class HomepageNoexpense extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='noexpense-container'>
                <img src={window.window.welcome_robot} alt="" />

                <div className='noexpense-content'>
                    <span className='noexpense-content-bold'>
                        <p>You have not added </p>
                        <p>any expenses yet</p><br />
                    </span>
                    <span className='noexpense-content-light'>
                        <p>To add a new expense, click the</p>
                        <p>orange "Add an expense" button.</p>
                    </span>
                </div>
            </div>
        )
    }
}

export default HomepageNoexpense;