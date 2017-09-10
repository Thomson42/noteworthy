import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import  NoteContainer  from '../notes/note-container';


export default class FolderView extends Component {

    // componentDidMount() {
    //     this.props.getFolders();
    // }
    render() {
        const { folders, loading, error } = this.props;
        let { folderImg } = this.props;
        const {removeFolders, addFolders} = this.props;
        function hideFolder() {
            folderImg = (folderImg === '📂') ? '📂':'';
        }

        if(loading) return <div>Loading...</div>;
        return (
            <div>
                {folders.map(folder => (
                    <Switch>
                        <div>
                            <section>
                                {folder.title}
                            </section>
                            <NavLink to={`/folders/${folder._id}`}
                                onClick={hideFolder()} 
                                style={{fontSize:80}}>{folderImg}</NavLink> 
                            <Route path='/folders/:id' component={NoteContainer}> </Route>
                        </div>
                    </Switch>
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
