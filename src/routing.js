import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import App from './App';

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
            <NavLink style={{
                padding:20,
                backgroundColor: 'white',
                color: 'black',
                
            }}to="/">Home</NavLink>
            <NavLink style={{padding:20}}to="/about">About</NavLink>
            <NavLink style={{padding:20}}to="/files">files</NavLink>
            <NavLink style={{padding:20}}to="back">↑</NavLink>

        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route path="/files" component={App}/>
    </div>
);

export default () => <Router><TopBar/></Router>;
