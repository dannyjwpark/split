import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AllBillsContainer from './bill/all_bills_container';
import FriendsShowContainer from './friend/friends_show_container'
import HomepageContainer from './home/home_page/homepage_container'
import SplashPage from './home/splash_page/splash_page';
// import Dashboard
import Modal from './modal/modal';
import SessionFormContainer from './session/session_form_container';
import SignupFormContainer from './user/signup_form_container';
import BillIndexItem from './bill/bill_index_item';

const App = () => (
    <div>
        <Modal />

        <Switch>
            <AuthRoute exact path="/login" component={SessionFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> 
            <AuthRoute exact path="/" component={SplashPage} />

            <ProtectedRoute exact path="/home" component={HomepageContainer} />
            
            <ProtectedRoute path="/users/:userId/friends/:friendId" component={FriendsShowContainer} />
            {/* <ProtectedRoute path="/bills/:billId" component={BillIndexItem} /> */}

            <ProtectedRoute exact path="/bills" component={AllBillsContainer} />
        </Switch>
    </div>
);

export default App;