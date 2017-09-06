import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { NoteView } from '../notes/note-node';

export function FolderView({folder}) {
    const closed = '📂';
    const opened = '📁';
    let current = closed;

    current = (closed) ? closed:opened;
    function imgToggle(foldImg) {
        return foldImg === '📂' ? '📂':'📁';
    }
    return (
        <div>
            {folder.title}
            <NavLink to={`/folders/${folder._id}`} style={{fontSize:80}}>{imgToggle(current)}</NavLink> 
            <Route path='/folders/:id' component={NoteView}> </Route>
        </div>
    );
}

export function NewFolder({}) {
    return (
        <div>
            <button>New Folder</button>
        </div>
    );
}
//caution too broad could overwrite important data
//
export default connect(
    state => ({folder:state.folder})
)(FolderView);
