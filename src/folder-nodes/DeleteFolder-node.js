import React from 'react';

export default function DeleteFolder({ removeFolder, folder }) {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            removeFolder(folder._id);
        }}>
            <button type="submit">Delete</button>
        </form>
    );
}