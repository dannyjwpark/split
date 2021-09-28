import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };

    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render(){
        return(
            <div>
                <header>
                    <nav>
                        <Link to="/">.Split()</Link>
                    </nav>
                    <nav>
                        <Link to="/login">
                            <button>
                                Login
                            </button>
                        </Link>
                        <Link to="/login">
                            <button>
                                Sign Up
                            </button>
                        </Link>
                    </nav>
                </header>
            </div>
        )
    }
}