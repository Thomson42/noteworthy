import * as actions from './folder-node-constants';
import api from './folder-node.api';

export const addTitle = (payload) => ({
    type: actions.NEW_TITLE,
    payload
});
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
    dispatch(foldersAreLoading(true));

    return api.getAll()
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(foldersAreLoading(false));

            return response;
        })
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
