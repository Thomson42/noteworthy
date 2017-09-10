import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNotes, addNote, editNote, removeNote} from './note-actions';

import NoteView from './note-node';

function mapStateToProps(state) {
    return {
        notes: state.notes,
        error: state.noteError,
        loading: state.noteLoading,
        noteImg: '📝'
    };
}

function mapDispatchToProps(dispatch) {
    dispatch(getNotes());
    return bindActionCreators({ addNote, editNote, removeNote }, dispatch);
}

const NoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteView);

export default NoteContainer;