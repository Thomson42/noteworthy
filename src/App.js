import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FolderView, NewFolder} from './folder-nodes/folder-node-container';
import {NoteView, NewNote} from './notes/note-container';


class App extends Component {
    render() {
        return (
            <main>
                <body className="App">
                    <FolderView/>
                    <NoteView/>
                </body>
                <footer>
                    <NewFolder/><NewNote/>
                </footer>
            </main>
        );
    }
}

export default App;
