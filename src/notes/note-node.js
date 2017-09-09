import React from 'react';
import { connect } from 'react-redux';

export function NoteView({title}) {
    const note = '📝';
    return (
        <div>
            <button style={{fontSize:40}}>{title} Title here!
                <section>{note}</section>
            </button>
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

