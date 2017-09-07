import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopBar from './routing';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducer from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {}, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
  
export default store;

ReactDOM.render(<TopBar />, document.getElementById('root'));
registerServiceWorker();
