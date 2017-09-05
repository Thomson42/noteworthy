import React from 'react';
import { connect } from 'react-redux';

export function NoteView({title}) {
    return (
        <div>
            <button style={{fontSize:80}}>{title} 📝</button>
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
export default connect(
    state => ({})
)(NoteView);
