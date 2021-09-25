import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';
import SignupContainer from './session/signup_container';

// NB: this file is complete - you do not to write/edit anything!
const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App store={store} />
        </HashRouter>
    </Provider>
);

export default Root;
