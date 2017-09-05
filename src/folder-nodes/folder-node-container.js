import React from 'react';
import { connect } from 'react-redux';

export function FolderView({folder}) {
    const closed = '📂';
    const opened = '📁';
    let current = closed;

    //  current = (closed) ? closed:opened;
    function imgToggle() {
        if (current === closed) current = opened;
        else if (current === opened) current = closed;
    }
    return (
        <div>
            <button onClick={imgToggle()} style={{fontSize:80}}>{current}</button>
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
export default connect(
    state => ({})
)(FolderView);
