import React from 'react';

export default function AddFolder({ addFolder }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            addFolder({ title: e.target.elements.title });
        }}>
            
            <button type="submit"style={{fontSize:20}}>New Folder</button>
            <input required title="title"/>
        </form>
    );
}