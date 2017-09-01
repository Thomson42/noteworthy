import * as actions from './file-node-constants';

//Should set precedent for getting file data and setting file data
export function files(state = [], action) {
    switch(action.type) {
    case actions.FETCHED_FILES:
        return action.payload;
    case actions.LOADED_FILES:
        return [...state, action.payload];
    default:
        return state;
    }
}

//Should create a valid error handling when fetching or loading files fails.
export function filesError(state = false, action) {
    switch(action.type) {
    case actions.FETCH_FILES_ERROR:
    case actions.LOAD_FILES_ERROR:
        return action.payload;
    case actions.FETCHING_FILES:
    case actions.LOADED_FILES:
        return null;
    default:
        return state;
    }
}

//Creates a check on wether files are being fetched and sets 
//LOADING_FILES state to true
export function filesLoading(state = false, action) {
    switch(action.type) {
    case actions.FETCHING_FILES:
    case actions.LOADING_FILES:
        return true;
    case actions.FETCHED_FILES:
    case actions.LOADED_FILES:
    case actions.FETCH_FILES_ERROR:
    case actions.LOAD_FILES_ERROR:
        return false;
    default:
        return state;
    }
}