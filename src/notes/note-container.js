import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotes, addNote, editNote, removeNote} from './note-actions';
import { editFolder } from '../folder-nodes/folder-node-actions';

import NoteView from './note-node';

function mapStateToProps(state) {
    return {
        notes: state.notes,
        error: state.noteError,
        loading: state.noteLoading,
        folder: state.folder
    };
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ addNote, editNote, removeNote, getNotes, editFolder }, dispatch);
}

function mergeProps(state, dispatch, own) {
    return {
        ...state,
        ...dispatch, 
        folderId:own.match.params.id
    };
}
const NoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(NoteView);

export default NoteContainer;