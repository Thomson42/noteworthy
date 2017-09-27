import React, { Component } from 'react';
import {NavLink,Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
const noteImg = '📝';
export default class NoteView extends Component {
    componentDidMount() {
        const { folderId, getNotes } = this.props;
        getNotes(folderId);
    }
    render() {
        const { notes, addNote } = this.props;
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
                        <Route path='/notes/:id' component={NewNote}></Route>
                    </div>
                   
                ))}
                <div style ={{clear:'both'}}>
                    <NewNote addNote={ addNote }/>
                </div>
                
            </div>
        );
    }
}

export function NewNote({}) {
    return (
        <div>
            <button>New Note</button>
        </div>
    );
}

