import * as actions from './folder-node-constants';
import api from './folder-node.api';

export const newFile = api => folder => dispatch => {
    return api
        .add(folder)
        .then(saved => {
            dispatch({type: actions.NEW_FOLDER, payload: saved });
        },
        error => {
            dispatch({ type: actions.NEW_FOLDER_ERROR, payload: error.error });
        }
        );
};

export const addTitle = api => folder => dispatch => {
    return api
        .update(folder)
        .then(saved => {
            dispatch({type: actions.NEW_TITLE, payload: saved});
        },
        error => {
            dispatch({type: actions.NEW_TITLE, payload: error.error});
        });
};
export const deleteFolder = api => folder => dispatch => {
    return api
        .delete(folder)
        .then(removed => {
            dispatch({type: actions.DELETE_FOLDER, payload: removed});
        });
};

export function foldersHasErred(bool) {
    return {
        type: actions.LOAD_FOLDERS_ERROR,
        hasErred: bool
    };
}

export function foldersAreLoading(bool) {
    return {
        type: actions.LOADING_FOLDERS,
        foldersLoading: bool
    };
}
export const fetchFoldersData = api => folder => dispatch =>{
    dispatch({type: actions.FETCHING_FOLDERS});

    return api.getAll()
        .then(
            folders => {
                dispatch({type: actions.FETCHED_FOLDERS, payload: folders});
            },
            error => {
                dispatch({type: actions.FETCH_FOLDERS_ERROR, payload: error});
            }
        )
        .catch(() => dispatch(foldersHasErred(true)));
};
