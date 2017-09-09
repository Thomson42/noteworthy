import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import App from './App';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({
    initialEntires: [ '/' ],
    initialIndex: 0
});

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);
export const TopBar = () => (
    
    <div className="TopBar">
        <ul>
            <NavLink style={{padding:20}}to="/">Home</NavLink>
            <NavLink style={{padding:20}}to="/about">About</NavLink>
            <NavLink style={{padding:20}}to="/folders">Folders</NavLink>

        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route path="/folders" component={App}/> 
    </div>
);

export default () => <Router history={history}><TopBar/></Router>;
