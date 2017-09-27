import React, { Component } from 'react';
import {NavLink,Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
const noteImg = '📝';
export default class NoteView extends Component {
    componentDidMount() {
        this.props.getNotes();
    }
    render() {
        const { notes } = this.props;
        return (
            <div>
                Hello!
                {notes.map(note => (
                    
                    <div key={note._id}>
                        <section>
                            {note.title}
                        </section>
                        <NavLink to={`/notes/${note._id}`}
                                
                            style={{fontSize:80}}>{noteImg}</NavLink> 
                        <Route path='/notes/:id' component={NewNote}></Route>
                    </div>
                   
                ))}
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

