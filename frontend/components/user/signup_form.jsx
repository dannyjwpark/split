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
        this.inputFlag = false,
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.inputFlag = true;
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
                    <li key={`error-${i}`}>
                        {`• ${error}`}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        const input_flag = this.inputFlag ? 'show-input' : 'dont-show-input';

        const error_flag = this.props.errors.length > 0 ? 'show-error' : 'dont-show-error'

        return (
            <div className="signup-form-container">

                <section className='signup-section'>
                    <section className='signup-left'>
                        <img className='signup-section-logo' src={window.logo_primary} alt="" />
                    </section>

                    <section className='signup-right'>
                        <form onSubmit={this.handleSubmit} className="signup-form-box">
                            <p className='signup-welcome'>Introduce Yourself</p>

                            <div className={error_flag} id='error-id'>
                                <p id='font-bold'>The following errors occurred:</p>
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

                                <span className={input_flag}>Here's my </span>
                                <span className={input_flag} id='font-bold'>email address:</span>

                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className={input_flag}
                                />

                                <span className={input_flag}>And here's my </span>
                                <span className={input_flag} id='font-bold'>password:</span>

                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className={input_flag}
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