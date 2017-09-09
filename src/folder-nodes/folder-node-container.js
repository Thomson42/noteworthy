import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFolders, addFolder, rewriteFolder, removeFolder} from './folder-node-actions';

import FolderView from './folder-node';

function mapStateToProps(state) {
    return {
        folders: state.folders,
        error: state.folderError,
        loading: state.folderLoading
    };
}

function mapDispatchToProps(dispatch) {
    dispatch(getFolders());
    return bindActionCreators({ addFolder, rewriteFolder, removeFolder }, dispatch);
}

const FolderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FolderView);

export default FolderContainer;