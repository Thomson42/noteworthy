import React from 'react';

export default function AddFolder({ addFolder }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            addFolder({ title: e.target.elements.title.value, notes:[]});
        }}>
            
            <button type="submit"style={{fontSize:20}}>New Folder</button>
            <input required name='title' title="title"/>
        </form>
    );
}