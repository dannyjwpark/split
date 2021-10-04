import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
    }
    
    // https://reactrouter.com/web/api/history
    // push(path, [state]) - (function) Pushes a new entry onto the history stack
    // debugger;
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            this.props.history.push("/home");
        }
        );
    }

    loginDemoUser(e) {
        e.preventDefault();
        const demoUser = { username: 'Demo User', email: 'demo_user@email.com', password: 'demo123' }
        this.props.processForm(demoUser).then(() => {
            this.props.history.push("/home");
        }
        );
    }

    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.receiveErrors([]);
    }
    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }



    render() {
        const error_flag = this.props.errors.length > 0 ? 'show-login-error' : 'dont-show-login-error'

        return (
            <div className="login-form-container">

                <header className='session-nav'>
                    <nav className='session-nav-elements'>
                        <nav className='left-session-nav'>
                            <img className='session-nav-logo' src={window.logo_signup} alt="" />
                            <Link to="/" className='session-word-logo'>.split()</Link>
                        </nav>
                        
                        <nav className='right-session-nav'>
                            <Link to="/login">
                                <button className='session-login-button'>
                                    Log in
                                </button>
                            </Link>
                            <Link to="/signup" >
                                <button className='session-signup-button'>
                                    Sign up
                                </button>
                            </Link>
                        </nav>
                    </nav>
                </header>


                <div className={error_flag}>
                    <div className='login-errors-list'>
                        {this.renderErrors()}
                    </div>
                </div>

                <section className='session-section'>
                    
                    <section className='session-section-container'>
                        <form onSubmit={this.handleSubmit} className="session-form-box">
                            <p className='session-login'>Log in</p>


                            <div className="session-form">
                                <br />
           
                                <span>Email address</span>
                                <br />
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="session-input"
                                />
                                <br />

                                <span>Password</span>
                                <br />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="session-input"
                                />
                                <br />
                                <input className="session-submit" type="submit" value='Log in' />
                                <br />

                                <button className='demo-user-button' onClick={this.loginDemoUser}>
                                    Demo user
                                </button>

                            </div>
                        </form>
                    </section>
                </section>
            </div>
        );
    }
}

export default withRouter(SessionForm);