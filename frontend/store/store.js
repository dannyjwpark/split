import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';

import RootReducer from '../reducers/root_reducer'
import thunk from 'redux-thunk';

const configureStore = (preloadedState) => {
    const store = createStore(RootReducer, preloadedState, applyMiddleware(thunk));
    return store;
}

export default configureStore;
