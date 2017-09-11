import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import App from './App';
import Auth from './auth/Auth';
import PrivateRoute from './Private-route';


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
        <Route path="/auth" render={() => <Auth/>}/>
        <PrivateRoute exact path="/folders" render={() => <App/>}/>
        <Redirect to="/"/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
    </div>
);

export default () => <Router ><TopBar/></Router>;
