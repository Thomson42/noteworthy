import * as actions from './folder-node-constants';

//Should set precedent for getting folder data and setting folder data
export function folders(state = [], action) {
    switch(action.type) {
    case actions.FETCHED_FOLDERS:
        return action.payload;
    case actions.NEW_FOLDER:
    //May need additional code for obj creation
        return [...state, action.payload];
    case actions.NEW_TITLE:
        return state.find((folder) => folder = action.title);
    //CAUTON: only allow deletes on childless parents
    case actions.DELETE_FOLDER:
        return [
            ...state.slice(0, action.index),
            ...state.slice(action.index+1)
        ];
    default:
        return state;
    }
}

//Should create a valid error handling when fetching or loading folders fails.
export function foldersError(state = false, action) {
    switch(action.type) {
    case actions.FETCH_FOLDERS_ERROR:
    case actions.NEW_FOLDER_ERROR:
        return action.payload;
    case actions.FETCHING_FOLDERS:
    case actions.NEW_FOLDER:
        return null;
    default:
        return state;
    }
}

//Creates a check on wether folders are being fetched and sets 
//LOADING_FOLDERS state to true
export function foldersLoading(state = false, action) {
    switch(action.type) {
    case actions.FETCHING_FOLDERS:
        return true;
    case actions.FETCHED_FOLDERS:
    case actions.FETCH_FOLDERS_ERROR:
        return false;
    default:
        return state;
    }
}