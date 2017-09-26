import React, { Component } from 'react';
import './App.css';
import FolderContainer from './folder-nodes/folder-node-container';
import {NewNote} from './notes/note-node';
import FolderView from './folder-nodes/folder-node';
import { checkForToken } from './auth/actions';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        };
    }
    componentDidMount() {
        const setReady = () => this.setState({ ready: true });
    
        this.props
            .checkForToken();
        //.then(setReady, setReady);
    }
    render() {
        return (
            <main>
                <div className="App">
                    <FolderContainer />
                </div>
                <footer>
                    <NewNote/>
                </footer>
            </main>
        );
    }
}

export default connect(
    state => ({ user: state.user }),
    dispatch => ({ 
        checkForToken() { return dispatch(checkForToken()); }  
    })
)(App);