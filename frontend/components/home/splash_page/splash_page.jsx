import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

class SplashPage extends React.Component {
    
    render(){
        return(
    <div className='splash-page'>
        <header className='splash-nav'>
            <nav className='splash-nav-elements'>
                <nav className='left-splash-nav'>
                    <img className='splash-nav-logo' src={window.logo_signup} alt="" />
                    <Link to="/" className='splash-word-logo'>.split()</Link>
                </nav>

                <nav className='right-splash-nav'>
                    <Link to="/login">
                        <button className='splash-login-button'>
                            Log in
                        </button>
                    </Link>
                    <Link to="/signup" >
                                <button className='splash-signup-button' id='signup-button1'>
                            Sign up
                        </button>
                    </Link>
                </nav>
            </nav>
        </header>

        <div className='splash-main'>
            <div className='splash-main-left'>
                <p className='splash-paragraph-black'>Less stress when</p>
                <p className='splash-paragraph-black'>sharing expenses</p>
                <p className='splash-paragraph-green'>on trips. </p>
                <div className='splash-main-left-icons'>
                    <img className='splash-left-icon1' src={window.airplane_icon} alt="" />
                    <img className='splash-left-icon2' src={window.house_icon} alt="" />
                    <img className='splash-left-icon3' src={window.heart_icon} alt="" />
                    <img className='splash-left-icon4' src={window.star_icon} alt="" />    
                </div>
                <p className='splash-paragraph-light'>Keep track of your shared expenses and</p>
                <p className='splash-paragraph-light'>balances with housemates, trips, groups,</p>
                <p className='splash-paragraph-light'>friends, and family.</p>
                <Link to="/signup" >
                    <button className='splash-signup-button' id='signup-button2'>
                        Sign up
                    </button>
                </Link>
            </div>            
            <div className='splash-main-right'>
                <img className='splash-airplane-img' src={window.airplane_img} alt="" />
            </div>
            <br />
        </div>

        <div className='splash-actions'>

        </div>

        <div className='splash-features'>

        </div>

        <div className='splash-reviews'>
            <div className='splash-reviews-flew-wrap'>
                <div className='splash-reivew1'>
                    <a href="">
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>“Fundamental” for tracking finances. As good as WhatsApp for containing awkwardness.</p>
                        </div>
                    </a>
                </div>
                <div className='splash-reivew2'>
                    <a href="">
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>Life hack for group trips. Amazing tool to use when traveling with friends! Makes life so easy!!</p>
                        </div>
                    </a>
                </div>
                <div className='splash-reivew3'>
                    <a href="">
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>Makes it easy to split everything from your dinner bill to rent.</p>
                        </div>
                    </a>
                </div>
                <div className='splash-reivew4'>
                    <a href="">
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>So amazing to have this app manage balances and help keep money out of relationships. love it!</p>
                        </div>
                    </a>
                </div>
                <div className='splash-reivew5'>
                    <a href="">
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>I never fight with roommates over bills because of this genius expense-splitting app</p>
                        </div>
                    </a>
                </div>
                <div className='splash-reivew6'>
                    <a href="">
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>I use it everyday. I use it for trips, roommates, loans. I love splitwise.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <footer className='splash-footer'>
            <div className='splash-footer-container'>

            </div>
            <img className='splash-footer-image'>

            </img>
        </footer>

    </div>
        )
    }
}

export default SplashPage;

// splash-header-left-nav: splitwise icon, "Splitwise"
// splash-header-right-nav: Log in button, Sign Up button

// footer: 