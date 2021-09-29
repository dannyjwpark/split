import React from "react";
import { withRouter } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // blank initial states for future user inputs
            name: '',
            email: '',
            password: '',
        };
        this.inputVisibility = false,
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.inputVisibility = true;
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push("/home"));
    }

    componentWillUnmount() {
        this.props.receiveErrors([]);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>
                        {`${i}. ${error}`}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        const input_visibility = this.inputVisibility ? 'visible-input' : 'invisible-input';

        const error_visibility = this.props.errors.length > 0 ? 'visible-error' : 'invisible-error'

        return (
            <div className="signup-wrapper">

                <section className='signup-body'>
                    <section className='signup-body-left'>
                        <img className='signup-body-left-logo' src={window.logo_primary} alt="" />
                    </section>

                    <section className='signup-body-right'>
                        <form onSubmit={this.handleSubmit} className="signup-form-box">
                            <p className='signup-body-right-header'>Introduce Yourself</p>

                            <div className={error_visibility} id='error-id'>
                                <p id='font-bold'>Warning! Check the errors list: </p>
                                <div id='errors-list'>
                                    {this.renderErrors()}
                                </div>
                            </div>

                            <div className="signup-form">

                                <span className='signup-hithere'>Hi there! My name is</span>
                                <input type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                    className='signup-name'
                                />

                                <span className={input_visibility}>Here's my </span>
                                <span className={input_visibility} id='font-bold'>email address:</span>

                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className={input_visibility}
                                />

                                <span className={input_visibility}>And here's my </span>
                                <span className={input_visibility} id='font-bold'>password:</span>

                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className={input_visibility}
                                />

                                <input className="signup-submit" type="submit" value='Sign me up!' />
                                <br />

                                <a href="https://secure.splitwise.com/terms" target="_blank">
                                    <p> By signing up, you accept the .split() Terms of Service </p>
                                </a>
                                

                            </div>
                        </form>
                    </section>
                </section>
            </div>
        );
    }
}

export default withRouter(SignupForm);