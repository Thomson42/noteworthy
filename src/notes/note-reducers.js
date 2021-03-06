import * as actions from './note-constants';

export function notes(state = [], action) {
    switch(action.type) {
    case actions.FETCHED_NOTES:
        return action.payload;
    case actions.NEW_NOTE:
        return [...state, action.payload];
    case actions.REWRITE_NOTE:{
        const index = state.findIndex((note) => note._id === action.payload._id);
        if(index === -1) return state;
        return [
            ...state.slice(0, index),
            {
                ...state[index],
                title:action.payload.title,
                contens:action.payload.contens
            },
            ...state.slice(index+1)
        ];
    }
    case actions.DELETE_NOTE:{
        const index = state.findIndex((note) => note._id === action.payload._id);
        if(index === -1) return state;
        return [

            ...state.slice(0, index),
            ...state.slice(index+1)
        ];}
    default:
        return state;
    }
}

//Should create a valid error handling when fetching or loading notes fails.
export function notesError(state = false, action) {
    switch(action.type) {
    case actions.FETCH_NOTES_ERROR:
    case actions.NEW_NOTE_ERROR:
        return action.payload;
    case actions.FETCHING_NOTES:
    case actions.NEW_NOTE:
        return null;
    default:
        return state;
    }
}

//Creates a check on wether notes are being fetched and sets 
//LOADING_NOTES state to true
export function notesLoading(state = false, action) {
    switch(action.type) {
    case actions.FETCHING_NOTES:
        return true;
    case actions.FETCHED_NOTES:
    case actions.FETCH_NOTES_ERROR:
        return false;
    default:
        return state;
    }
}