import React from 'react';

export default function DeleteNote({ deleteNote, note }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            deleteNote(note._id);
        }}>
            <button type="submit">Delete</button>
        </form>
    );
}