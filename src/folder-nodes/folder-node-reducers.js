import * as actions from './folder-node-constants';

//Should set precedent for getting folder data and setting folder data
export function folders(state = [], action) {
    switch(action.type) {
    case actions.FETCHED_FOLDERS:
        return action.payload;
    case actions.NEW_FOLDER:
        return [...state, action.payload];
    case actions.NEW_TITLE:{
        const index = state.findIndex((folder) => folder._id === action.payload._id);
        if(index === -1) return state;
        return [
            ...state.slice(0, index),
            {
                ...state[index],
                title:action.payload.title
            },
            ...state.slice(index+1)
        ];
    }
    //CAUTON: only allow deletes on childless parents
    case actions.DELETE_FOLDER:{
        const index = state.findIndex((folder) => folder._id === action.payload._id);
        if(index === -1) return state;
        return [

            ...state.slice(0, index),
            ...state.slice(index+1)
        ];}
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