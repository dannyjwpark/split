import React from 'react';
import SignupContainer from './session/signup_container';

export default () => {
    return(
        <div>
            <Route path="/signup" component={SignupContainer} />
        </div>
    )
}