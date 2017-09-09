import React, { Component } from 'react';
import './App.css';
import FolderContainer from './folder-nodes/folder-node-container';
import AddFolder from './folder-nodes/AddFolder-node';
import {NewNote} from './notes/note-node';
import FolderView from './folder-nodes/folder-node';

class App extends Component {
    constructor(props) {
        super(props);
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

export default App;
