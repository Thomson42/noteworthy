import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFolders, addFolder, editFolder, removeFolder} from './folder-node-actions';
import FolderView from './folder-node';

function mapStateToProps(state) {
    return {
        folders: state.folders,
        error: state.folderError,
        loading: state.folderLoading
    };
}
//NOTE: may need to augment getNotes into folders space since they have the necessary id's
function mapDispatchToProps(dispatch) {
    dispatch(getFolders());
    return bindActionCreators({ addFolder, editFolder, removeFolder }, dispatch);
}

const FolderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FolderView);

export default FolderContainer;