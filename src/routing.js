import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import App from './App';
import Auth from './auth/Auth';
import PrivateRoute from './Private-route';
import { checkForToken } from './auth/actions';
import { connect } from 'react-redux';
import  NoteContainer  from './notes/note-container';
import Editor from './notes/editor.js';



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
class TopBar extends Component {

    componentDidMount() {
        this.props.checkForToken();
    }
    render() {
        return (
            <Router >
                <div className="TopBar">
                    <ul>
                        <NavLink style={{padding:20}}to="/">Home</NavLink>
                        <NavLink style={{padding:20}}to="/about">About</NavLink>
                        <NavLink style={{padding:20}}to="/folders">Folders</NavLink>
    
                    </ul>
    
                    <hr/>
                    <Switch>
                        <Route path="/auth" render={() => <Auth/>}/>
                        <PrivateRoute exact path="/folders" render={() => <App/>}/>
                        <PrivateRoute path="/folders/:id" component={ NoteContainer }/>
                        <PrivateRoute path='/notes/:id' component={Editor}/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default connect(
    state => ({ user: state.auth.user }),
    dispatch => ({
        checkForToken() { return dispatch(checkForToken()); }
    })
)(TopBar);