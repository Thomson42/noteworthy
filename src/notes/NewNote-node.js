import React from 'react';

export default function NewNote({ addNote, editFolder, folder }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            addNote({ title: e.target.elements.title.value, contens:''});
        }}>
            
            <button type="submit"style={{fontSize:20}}>New Note</button>
            <input required name='title' title="title"/>
        </form>
    );
}