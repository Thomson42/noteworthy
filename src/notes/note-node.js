import React, { Component } from 'react';
import {NavLink,Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

export default function NoteView({ notes, loading, error, noteImg }) {
    return (
        <div>
            {notes.map(note => (
                <Switch>
                    <div>
                        <section>
                            {note.title}
                        </section>
                        <NavLink to={`/notes/${note._id}`}
                            
                            style={{fontSize:80}}>{noteImg}</NavLink> 
                        <Route path='/notes/:id' component={NewNote}> </Route>
                    </div>
                </Switch>
            ))}
        </div>
    );
}

export function NewNote({}) {
    return (
        <div>
            <button>New Note</button>
        </div>
    );
}

