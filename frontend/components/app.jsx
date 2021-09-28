import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { Provider } from 'react-redux';


import Modal from './modal/modal';


const App = ({ desc }) => {
    return (
        <div>
            {desc}
        </div>
    );
}

export default App;