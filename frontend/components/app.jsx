import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import FriendShowContainer from './friend/friends_show_container'
// import Home from './home/home';
import Modal from './modal/modal';
import SessionFormContainer from './session/session_form_container';
import SignupFormContainer from './user/signup_form_container';

const App = () => (
    <div>
        {/* <Modal /> */}
        <Switch>
            < SessionFormContainer />
            < SignupFormContainer />
            {/* <AuthRoute exact path="/login" component={SessionFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
            {/* <AuthRoute exact path="/" component={Home} /> */}


        </Switch>
    </div>
);

export default App;