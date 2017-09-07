import React from 'react';

export default function AddFolder({ onAdd }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onAdd({ title: e.target.elements.title.value });
        }}>
            <input required title="title"/>
            <button type="submit"style={{fontSize:20}}>+</button>
        </form>
    );
}