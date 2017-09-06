import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FolderView, NewFolder} from './folder-nodes/folder-node';
import {NewNote} from './notes/note-node';


class App extends Component {
    render() {
        return (
            <main>
                <div className="App">
                    <FolderView folder={{_id:42,title:'new folder'}}/>
                </div>
                <footer>
                    <NewFolder/><NewNote/>
                </footer>
            </main>
        );
    }
}

export default App;
