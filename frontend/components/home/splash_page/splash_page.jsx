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

                        <p className='splash-paragraph-lighter'> Free for  iphone, 🤖  Android, and web </p>
            </div>            
            <div className='splash-main-right'>
                <img className='splash-airplane-img' src={window.airplane_img} alt="" />
            </div>
        </div>

        <div className='splash-actions'>
            <div className='splash-actions-row1'>
                <div className='action1_container'>
                    <p className='action_p_header'>Track balances</p>
                    <p className='action_p_body'> Keep Track of shared expenses, </p>
                    <p className='action_p_body'> balances, and who owes who.</p>
                    <img className='splash-action1' src={window.action1_screen} alt="" />
                </div>
                <div className='action2_container'>
                    <p className='action_p_header'>Organize expenses</p>
                    <p className='action_p_body'> Split expenses with any groups: trips, </p>
                    <p className='action_p_body'> housemates, friends, and family.</p>
                    <img className='splash-action2' src={window.action2_screen} alt="" />
                </div>
            </div>
            <div className='splash-actions-row2'>
                <div className='action3_container'>
                    <p className='action_p_header'>Add expenses easily</p>
                    <p className='action_p_body'> Quickly add expenses on the go before </p>
                    <p className='action_p_body'> you forget who paid.</p>
                    <img className='splash-action3' src={window.action3_screen} alt="" />
                </div>
                <div className='action4_container'>
                    <p className='action_p_header'>Pay friends back</p>
                    <p className='action_p_body'> Settle up with a friend and record any </p>
                    <p className='action_p_body'> cash or online payment.</p>
                    <img className='splash-action4' src={window.action4_screen} alt="" />
                </div>
            </div>
        </div>

        <p className='feature-title'> The whole nine yards </p>
        <div className='splash-features'>
            <div className='features-col1'>
                <ul className='features-col1-row1'>
                    <p id='f-c1r1-p'> 
                    <img id='f-c1r1-img' src={window.envelope_icon} alt="" />
                     &nbsp;   Add groups and friends 
                    </p>                    
                </ul>
                <ul className='features-col1-row2'>
                    <p id='f-c1r2-p'> 
                    <img id='f-c1r2-img' src={window.envelope_icon} alt="" />
                      &nbsp;  Split expenses, record debts 
                    </p>
                </ul>
                <ul className='features-col1-row3'>
                    <p id='f-c1r3-p'> 
                    <img id='f-c1r3-img' src={window.envelope_icon} alt="" />
                      &nbsp;  Equal or unequal splits 
                    </p>
                </ul>
                <ul className='features-col1-row4'>
                    <p id='f-c1r4-p'> 
                    <img id='f-c1r4-img' src={window.envelope_icon} alt="" />
                      &nbsp;  Split by % or shares 
                    </p>
                </ul>
                <ul className='features-col1-row5'>
                    <p id='f-c1r5-p'> 
                    <img id='f-c1r5-img' src={window.envelope_icon} alt="" />
                      &nbsp;  Calculate total balances 
                    </p>
                </ul>
                <ul className='features-col1-row6'>
                    <p id='f-c1r6-p'> 
                    <img id='f-c1r6-img' src={window.envelope_icon} alt="" />
                      &nbsp;  Suggested repayments 
                    </p>
                </ul>
                <ul className='features-col1-row7'>
                    <p id='f-c1r7-p'> 
                    <img id='f-c1r7-img' src={window.envelope_icon} alt="" />
                      &nbsp;  Simplify debts 
                    </p>
                </ul>
                <ul className='features-col1-row8'>
                    <p id='f-c1r8-p'> 
                    <img id='f-c1r8-img' src={window.envelope_icon} alt="" />
                       &nbsp; Recurring expenses 
                    </p>
                </ul>
                
            </div>
            <div className='features-col2'>
                <ul className='features-col2-row1'>
                    <p id='f-c2r1-p'> 
                    <img id='f-c2r1-img' src={window.envelope_icon} alt="" />
                       &nbsp; Offline mode 
                    </p>
                </ul>
                <ul className='features-col2-row2'>
                    <p id='f-c2r2-p'> 
                    <img id='f-c2r2-img' src={window.envelope_icon} alt="" />
                       &nbsp; Cloud sync 
                    </p>
                </ul>
                <ul className='features-col2-row3'>
                    <p id='f-c2r3-p'> 
                    <img id='f-c2r3-img' src={window.envelope_icon} alt="" />
                       &nbsp; Spending totals 
                        </p>
                </ul>
                <ul className='features-col2-row4'>
                    <p id='f-c2r4-p'> 
                    <img id='f-c2r4-img' src={window.envelope_icon} alt="" />
                       &nbsp; Categorize expenses 
                        </p>
                </ul>
                <ul className='features-col2-row5'>
                    <p id='f-c2r5-p'> 
                    <img id='f-c2r5-img' src={window.envelope_icon} alt="" />
                       &nbsp; Easy CSV exports 
                    </p>
                </ul>
                <ul className='features-col2-row6'>
                    <p id='f-c2r6-p'> 
                    <img id='f-c2r6-img' src={window.envelope_icon} alt="" />
                       &nbsp; 7+ languages
                        </p>
                </ul>
                <ul className='features-col2-row7'>
                    <p id='f-c2r7-p'> 
                    <img id='f-c2r7-img' src={window.envelope_icon} alt="" />
                       &nbsp; 100+ currencies 
                        </p>
                </ul>
                <ul className='features-col2-row8'>
                    <p id='f-c2r8-p'> 
                    <img id='f-c2r8-img' src={window.envelope_icon} alt="" />
                       &nbsp; Payment integrations 
                        </p>
                </ul>
                
            </div>
            <div className='features-col3'>
                <ul className='features-col3-row1'>
                    <p id='f-c3r1-p'> 
                    <img id='f-c3r1-img' src={window.diamond_icon} alt="" />
                       &nbsp; A totally ad-free experience 
                    </p>
                </ul>
                <ul className='features-col3-row2'>
                    <p id='f-c3r2-p'> 
                    <img id='f-c3r2-img' src={window.diamond_icon} alt="" />
                       &nbsp; Currency conversion
                    </p>
                </ul>
                <ul className='features-col3-row3'>
                    <p id='f-c3r3-p'> 
                    <img id='f-c3r3-img' src={window.diamond_icon} alt="" />
                       &nbsp; Receipt scanning 
                    </p>
                </ul>
                <ul className='features-col3-row4'>
                    <p id='f-c3r4-p'> 
                    <img id='f-c3r4-img' src={window.diamond_icon} alt="" />
                       &nbsp; Itemization
                    </p>
                </ul>
                <ul className='features-col3-row5'>
                    <p id='f-c3r5-p'> 
                    <img id='f-c3r5-img' src={window.diamond_icon} alt="" />
                       &nbsp; Charts and graphs 
                    </p>
                </ul>
                <ul className='features-col3-row6'>
                    <p id='f-c3r6-p'> 
                    <img id='f-c3r6-img' src={window.diamond_icon} alt="" />
                       &nbsp; Expense search 
                    </p>
                </ul>
                <ul className='features-col3-row7'>
                    <p id='f-c3r7-p'> 
                    <img id='f-c3r7-img' src={window.diamond_icon} alt="" />
                       &nbsp; Save default splits 
                    </p>
                </ul>
                <ul className='features-col3-row8'>
                    <p id='f-c3r8-p'> 
                    <img id='f-c3r8-img' src={window.diamond_icon} alt="" />
                       &nbsp; Early access to new features 
                    </p>
                </ul>
            </div>

        </div>

        <div className='feature-classes'>
            <img id='f-c3r8-img' src={window.envelope_icon} alt="" />
            <p> Core features </p>
            <img id='f-c3r8-img' src={window.diamond_icon} alt="" />
            <p> Pro features </p>
        </div>

        <div className='splash-reviews'>
            <div className='splash-reviews-row1'>
                <div className='splash-reivew1'>
                    
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>
                                “Fundamental” for tracking finances. <br />
                                As good as WhatsApp for containing <br />
                                awkwardness. <br />
                            </p>
                        </div>
                    
                </div>
                <div className='splash-reivew2'>
                    
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>
                                Life hack for group trips. Amazing tool <br />
                                to use when traveling with friends! <br />
                                Makes life so easy!! <br />
                            </p>
                        </div>
                    
                </div>
                <div className='splash-reivew3'>
                    
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>
                                Makes it easy to split everything from <br />
                                your dinner bill to rent. <br />
                            </p>
                        </div>
                    
                </div>
            </div>
            <div className='splash-reviews-row2'>
                <div className='splash-reivew4'>
                    
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>
                                So amazing to have this app manage <br />
                                balances and help keep money out of <br />
                                elationships. love it! <br />
                            </p>
                        </div>
                    
                </div>
                <div className='splash-reivew5'>
                    
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>
                                I never fight with roommates over <br />
                                bills because of this genius expense- <br />
                                splitting app <br />
                                </p>
                        </div>
                    
                </div>
                <div className='splash-reivew6'>
                    
                        <div className='splash-review-content'>
                            <p className='splash-review-content-paragraph'>
                                I use it everyday. I use it for trips, <br />
                                roommates, loans. I love splitwise. <br />
                                </p>
                        </div>
                    
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