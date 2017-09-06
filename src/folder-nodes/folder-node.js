import React from 'react';
import { NavLink, Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { NoteView } from '../notes/note-node';

export function FolderView({folder}) {
    let closed = '📂';
    const opened = '📁';
    let current = closed;

    //current = (closed) ? closed:opened;
    function imgToggle(foldImg) {
        //closed = null;
        return foldImg === '📂' ? undefined :'📂';
    }
    return (
        <div>
            {folder.title}
            <NavLink to={`/folders/${folder._id}`}
                onClick={imgToggle(closed)} 
                style={{fontSize:80}}>{closed||opened}</NavLink> 
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
