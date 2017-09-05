import * as actions from './folder-node-constants';
import api from '../api/noteworthy-api';

export const addTitle = (payload) => ({
    type: actions.ADD_TITLE,
    payload
});

export function foldersHasErred(bool) {
    return {
        type: actions.LOAD_FOLDERS_ERROR,
        hasErred: bool
    };
}

export function foldersAreLoading(bool) {
    return {
        type: actions.LOADING_FOLDERS,
        isLoading: bool
    };
}

export function foldersFetchDataSuccess(folders) {
    return {
        type: actions.FETCHED_FOLDERS,
        folders
    };
}

export function fetchFoldersData(url) {
    return (dispatch) => {
        dispatch(foldersAreLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(foldersAreLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((folders) => dispatch(foldersFetchDataSuccess(folders)))
            .catch(() => dispatch(foldersHasErred(true)));
    };
}