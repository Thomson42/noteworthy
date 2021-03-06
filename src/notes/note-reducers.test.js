import { notes, notesLoading, notesError } from './note-reducers';
import * as actions from './note-constants';


describe('note reducers', () => {
    it('initial state', () => {
        const newState = notes(undefined, {type: undefined});

        expect(newState).toEqual([]);
    });
    
    it('saves a note', () => {
        const linkNote = {
            title: 'link note'
        };
        const newState = notes([], {type: actions.NEW_NOTE, payload: linkNote});
        
        expect(newState).toEqual([linkNote]);
        
        const odaNot = {
            title: 'the other note'
        };
        
        const additionalState = notes(newState, {type: actions.NEW_NOTE, payload: odaNot});
        
        expect(additionalState).toEqual([linkNote,odaNot]);
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
        expect(initialState).toEqual([foeNote]);

        const finalState = notes(initialState, {type: actions.REWRITE_NOTE, payload:weirdNote});
        expect(finalState).toEqual([weirdNote]);
    });

    it('deletes chosen note', () => {
        const foeNote = {
            _id: '234',
            title:'delete me!'
        };
        const initialState = notes([], {type: actions.NEW_NOTE, payload:foeNote});
        expect(initialState).toEqual([foeNote]);
        const finalState = notes(initialState,{type: actions.DELETE_NOTE, payload:foeNote});
        expect(finalState).toEqual([]);
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