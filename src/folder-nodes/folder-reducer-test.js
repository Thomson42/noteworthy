import reducer from './folder-node-reducers';
import * as actions from './folder-node-constants';


describe('folder node reducers', () => {
    it('initial state', () => {
        const newState = reducer(undefined, {type: undefined});

        expect(newState).toEqual([]);
    });

    it('saves a folder', () => {
        const linkFolder = {
            title: 'link folder'
        };
        const newState = reducer([], {type: actions.NEW_FOLDER});

        expect(newState).toEqual([]);
    });
});