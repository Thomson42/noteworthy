import * as actions from './note-constants';
import api from './note.api';

export const newNote = api => note => dispatch => {
    return api
        .add(note)
        .then(saved => {
            dispatch({type: actions.NEW_NOTE, payload: saved });
        },
        error => {
            dispatch({ type: actions.NEW_NOTE_ERROR, payload: error.error });
        }
        );
};

export const addNote = newNote(api);

export const rewriteNote = api => note => dispatch => {
    return api
        .update(note)
        .then(saved => {
            dispatch({type: actions.REWRITE_NOTE, payload: saved});
        },
        error => {
            dispatch({type: actions.REWRITE_NOTE, payload: error.error});
        });
};
export const editNote = rewriteNote(api);

export const deleteNote = api => note => dispatch => {
    return api
        .delete(note)
        .then(removed => {
            dispatch({type: actions.DELETE_NOTE, payload: removed});
        });
};
export const removeNote = deleteNote();

export function notesHasErred(bool) {
    return {
        type: actions.LOAD_NOTES_ERROR,
        hasErred: bool
    };
}

export function notesAreLoading(bool) {
    return {
        type: actions.LOADING_NOTES,
        notesLoading: bool
    };
}
export const fetchNotesData = api => folderId => dispatch =>{
    dispatch({type: actions.FETCHING_NOTES});

    return api.getAll(folderId)
        .then(
            notes => {
                dispatch({type: actions.FETCHED_NOTES, payload: notes});
            },
            error => {
                dispatch({type: actions.FETCH_NOTES_ERROR, payload: error});
            }
        )
        .catch(() => dispatch(notesHasErred(true)));
};

export const getNotes = fetchNotesData(api);