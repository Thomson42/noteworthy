import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import  NoteContainer  from '../notes/note-container';
import AddFolder from './AddFolder-node';
import styled from 'styled-components';

const Node = styled.div`
    width: 170px;
    float: left;
`;
export default class FolderView extends Component {

    // componentDidMount() {
    //     this.props.getFolders();
    // }
    render() {
        const { folders, loading, error } = this.props;
        const {removeFolders, addFolder} = this.props;
        let folderImg = '📂';
        function hideFolder() {
            folderImg = (folderImg === '📂') ? '📂':'';
        }

        if(loading) return <div>Loading...</div>;
        return (
            <div>
                <div>
                    {folders.map(folder => (
                    
                        <Node>
                            <section>
                                {folder.title}
                            </section>
                            <NavLink to={`/folders/${folder._id}`}
                                onClick={hideFolder()} 
                                style={{fontSize:80}}>{folderImg}</NavLink> 
                        </Node>
                    ))}
                </div>
                <div style ={{clear:'both'}}>
                    <Route path='/folders/:id' component={ NoteContainer }></Route>
                    <AddFolder addFolder={ addFolder }/>
                </div>
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
