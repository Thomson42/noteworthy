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

    it('rewrites folder title', () => {
        const foeFolder = {
            _id: '234',
            title:'rewrite me!'
        };
        const goodFolder = {
            _id:foeFolder._id,
            title:'good folder'
        };

        const initialState = folders([], {type: actions.NEW_FOLDER, payload:foeFolder});
        expect(initialState).toEqual([foeFolder]);

        const finalState = folders(initialState, {type: actions.NEW_TITLE, payload:goodFolder});
        expect(finalState).toEqual([goodFolder]);
    });

    it('deletes chosen folder', () => {
        const foeFolder = {
            _id: '234',
            title:'delete me!'
        };
        const initialState = folders([], {type: actions.NEW_FOLDER, payload:foeFolder});
        expect(initialState).toEqual([foeFolder]);
        const finalState = folders(initialState,{type: actions.DELETE_FOLDER, payload:foeFolder});
        expect(finalState).toEqual([]);
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