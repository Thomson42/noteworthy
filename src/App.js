import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FolderView, NewFolder} from './folder-nodes/folder-node';
import {NewNote} from './notes/note-node';
//TODO: delete moc obj once back end connected
let mockFolder = {
    _id:'42',
    title:'new folder',
    notes:[
        {
            note:'43',
            _id:'44'
        }
    ]
};

let mockNote = {
    _id:'43',
    title: 'README',
    contens: 'Hello! Welcome to Noteworthy if your reading this than that means the page is working as intended.'
};

class App extends Component {
    render() {
        return (
            <main>
                <div className="App">
                    <FolderView folder={mockFolder}/>
                </div>
                <footer>
                    <NewFolder/><NewNote/>
                </footer>
            </main>
        );
    }
}

export default App;
