import React from "react";
import { Link } from 'react-router';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // empty for users to input
            username: '',
            email: '',
            password: '',
        };
    }

    handleInput(type) {
        return (e) => {
            // [] to make the states key values
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefaultAction();
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/users'))
    }

    render() {
        return (
            <div>
                <h2>Sign up</h2>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>password:
                        <input
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignupForm;