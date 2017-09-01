import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TopBar from './routing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TopBar />, document.getElementById('root'));
registerServiceWorker();
