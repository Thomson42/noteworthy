import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotes, addNote, editNote, removeNote} from './note-actions';

import NoteView from './note-node';

function mapStateToProps(state) {
    return {
        notes: state.notes,
        error: state.noteError,
        loading: state.noteLoading,
        folders: state.folders
    };
}

function mapDispatchToProps(dispatch) {
    dispatch(getNotes());
    return bindActionCreators({ addNote, editNote, removeNote }, dispatch);
}

function mergeProps(state, dispatch, own) {
    const { notes:notesById, folders, ...rest } = state;
    const folder = folders.find(f => f._id === own.location.params.id);
    const notes = folder.notes.map(n => notesById[n]);
    return {
        ...rest,
        ...dispatch, 
        notes
    };
}
const NoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(NoteView);

export default NoteContainer;