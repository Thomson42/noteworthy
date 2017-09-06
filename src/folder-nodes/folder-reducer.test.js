import { folders, foldersLoading, foldersError } from './folder-node-reducers';
import * as actions from './folder-node-constants';


describe('folder node reducers', () => {
    it('initial state', () => {
        const newState = folders(undefined, {type: undefined});

        expect(newState).toEqual([]);
    });

    it('saves a folder', () => {
        const linkFolder = {
            title: 'link folder'
        };
        const newState = folders([], {type: actions.NEW_FOLDER, payload: linkFolder});

        expect(newState).toEqual([linkFolder]);

        const odaFolda = {
            title: 'the other folder'
        };

        const additionalState = folders(newState, {type: actions.NEW_FOLDER, payload: odaFolda});

        expect(additionalState).toEqual([linkFolder,odaFolda]);
    });
    it('fetches available folders', () => {
        const newState = foldersLoading([], {type: actions.FETCHING_FOLDERS, payload: [1,2,3]});
        expect(newState).toEqual(true);
    });
    it('calls errors', () => {
        const newState = foldersError([], {type: actions.FETCH_FOLDERS_ERROR, payload:Error});
        expect(newState).toEqual(Error);
    });
    it('ignores working actions', () => {
        const newState = foldersError([], {type: actions.FETCHING_FOLDERS, payload:[]});
        expect(newState).toEqual(null);
    });
});