import { notes, notesLoading, notesError } from './note-reducers';
import * as actions from './note-constants';


describe('note reducers', () => {
    it('initial state', () => {
        const newState = notes(undefined, {type: undefined});

        expect(newState).toEqual({});
    });
    
    it('saves a note', () => {
        const linkNote = {
            _id: 'w12tdw24r',
            title: 'link note'
        };
        const justID = linkNote._id;
        const newState = notes([], {type: actions.NEW_NOTE, payload: linkNote});
        
        expect(newState).toEqual({'w12tdw24r': linkNote});
        
        const odaNot = {
            _id: '23dfger',
            title: 'the other note'
        };
        
        const additionalState = notes(newState, {type: actions.NEW_NOTE, payload: odaNot});
        
        expect(additionalState).toEqual({'23dfger': odaNot,'w12tdw24r': linkNote});
    });
    
    it('rewrites note contens and title', () => {
        const foeNote = {
            _id: '234',
            title: 'meh',
            contens: 'Rewrite me!'
        };
        const weirdNote = {
            _id:foeNote._id,
            contens: 'You have been rewritten.',
            title: 'meh'
        };

        const initialState = notes([], {type: actions.NEW_NOTE, payload:foeNote});
        expect(initialState).toEqual({'234': foeNote});

        const finalState = notes(initialState, {type: actions.REWRITE_NOTE, payload:weirdNote});
        expect(finalState).toEqual({'234': weirdNote});
    });

    it('deletes chosen note', () => {
        const foeNote = {
            _id: '234',
            title:'delete me!'
        };
        const initialState = notes([], {type: actions.NEW_NOTE, payload:foeNote});
        expect(initialState).toEqual({'234': foeNote});
        const finalState = notes(initialState,{type: actions.DELETE_NOTE, payload:foeNote});
        expect(finalState).toEqual({});
    });

    it('fetches available notes', () => {
        const newState = notesLoading([], {type: actions.FETCHING_NOTES, payload: [1,2,3]});
        expect(newState).toEqual(true);
    });

    it('calls errors', () => {
        const newState = notesError([], {type: actions.FETCH_NOTES_ERROR, payload:Error});
        expect(newState).toEqual(Error);
    });

    it('ignores working actions', () => {
        const newState = notesError([], {type: actions.FETCHING_NOTES, payload:[]});
        expect(newState).toEqual(null);
    });
});