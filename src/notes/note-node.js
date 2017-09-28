import React, { Component } from 'react';
import {NavLink,Route, Switch } from 'react-router-dom';
import NewNote from './NewNote-node';
import DeleteNote from './DeleteFolder-node';

const noteImg = '📝';
export default class NoteView extends Component {
    componentDidMount() {
        const { folderId, getNotes } = this.props;
        getNotes(folderId);
    }
    render() {
        const { folder, notes, addNote, removeNote, editFolder} = this.props;
        return (
            <div>
                Hello this is the note NoteView!
                {notes && notes.map(note => (
                    <div key={note._id}>
                        <section>
                            {note.title}
                        </section>
                        <NavLink to={`/notes/${note._id}`}
                            style={{fontSize:80}}>{noteImg}</NavLink>
                        <DeleteNote deleteNote={ removeNote } note={ note }/>
                    </div>
                   
                ))}
                <div style ={{clear:'both'}}>
                    <NewNote 
                        addNote={ addNote } 
                        editFolder={ editFolder } 
                        folder={ folder }/>
                </div>
                
            </div>
        );
    }
}

