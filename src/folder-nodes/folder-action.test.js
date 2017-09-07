import * as actions from './folder-node-constants';
import { addTitle, newFile, fetchFoldersData } from './folder-node-actions';

describe('folder actions', () => {
    it('makes a new a folder', () => {
        const api = {
            add(folder) { return Promise.resolve(folder); }
        };
        const folder = { title: 'my daily workouts'};
        
        let dispatched = [];
        const dispatch = (action) => {
            dispatched.push(action);
        };
        const savedFolder = newFile(api);
        const dispatchFunc = savedFolder(folder);

        dispatchFunc(dispatch)
            .then(() => {
                expect(dispatched).toEqual([{type: actions.NEW_FOLDER, payload:folder}]);
            });
    });

    it('has an editable title', () => {
        expect.assertions(1);
        const folder2 = {id:'231klj4poi345ads8', title: 'rewrite me'};
        const newFolder = {title:'poor empty file'};
        const api = {update: (id ,folder) => Promise.resolve(newFolder)};

        const dispatch = jest.fn();

        const rewriteFolder = addTitle(api);
        const dispatchFunc = rewriteFolder(folder2.id, newFolder);

        dispatchFunc(dispatch)
            .then(() => {
                expect(dispatch).toHaveBeenCalledWith({type: actions.NEW_TITLE, payload:newFolder});
            });
    });

    it('gets all the folders', () => {
        const folders = [{title:'daily meal plans'}];
        const api = { getAll: () => Promise.resolve(folders) };
        const dispatched = [];
        const dispatch = (action) => {
            dispatched.push(action);
        };

        const getFolders = fetchFoldersData(api);
        return getFolders()(dispatch)
            .then(() => {
                expect(dispatched).toEqual([
                    {type: actions.FETCHING_FOLDERS },
                    {type: actions.FETCHED_FOLDERS, payload: folders }
                ]);
            });
    });
});