import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { NoteView } from '../notes/note-node';


export default class FolderView extends Component {

    // componentDidMount() {
    //     this.props.getFolders();
    // }
    render() {
        const { folders, loading, error } = this.props;
        const {removeFolders, addFolders} = this.props;
        let closed = '📂';
        let opened = '📁';
        let current = closed;
        function imgToggle() {
            //closed = null;
            return current === '📂' ? undefined :'📂';
        }
        if(loading) return <div>Loading...</div>;
        return (
            <div>
                {folders.map(folder => (
                    <div>
                        <NavLink to={`/folders/${folder._id}`}
                            onClick={() => imgToggle()} 
                            style={{fontSize:80}}>{current}</NavLink> 
                        <Route path='/folders/:id' component={NoteView}> </Route>
                    </div>
                ))}
            </div>
        );
    }

}

//current = (closed) ? closed:opened;

//caution too broad could overwrite important data
//
// export default connect(
//     state => ({folder:state.folder})
// )(FolderView);
