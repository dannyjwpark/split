import React from "react";
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // empty for users to input
            username: '',
            email: '',
            password: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render() {
        return (
            <div className='signup-form-wrapper'>
                <div className='signnup-toppad'></div>
                <div className='signup-flex-container'>
                    <a href="" className='signup-splitwise-logo' src='https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg'></a>
                    <div className='signup-content-block'>
                        <form onSubmit={this.handleSubmit} className='signup-form'>
                            <label>Username:
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                />
                            </label>
                            <label>Email:
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInput('email')}
                                />
                            </label>
                            <label>Password:
                                <input
                                    type="text"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                />
                            </label>
                            <button onClick={this.handleSubmit}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);