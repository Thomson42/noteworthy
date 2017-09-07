import * as actions from './note-constants';
import { rewriteNote, deleteNote, newNote, fetchNotesData } from './note-actions';

describe('note actions', () => {
    it('makes a new a note', () => {
        const api = {
            add(note) { return Promise.resolve(note); }
        };
        const note = { title: 'my daily workouts'};
        
        let dispatched = [];
        const dispatch = (action) => {
            dispatched.push(action);
        };
        const savedNote = newNote(api);
        const dispatchFunc = savedNote(note);

        dispatchFunc(dispatch)
            .then(() => {
                expect(dispatched).toEqual([{type: actions.NEW_NOTE, payload:note}]);
            });
    });

    it('the note is editable ', () => {
        expect.assertions(1);
        const note2 = {
            _id:'231klj4poi345ads8', 
            title: 'rewrite me', 
            contents: 'edit me too!'
        };
        const newNote = {
            title:'poor empty note', 
            contents:'Hey I am not that empty!'
        };
        const api = {update: (id ,note) => Promise.resolve(newNote)};

        const dispatch = jest.fn();

        const editNote = rewriteNote(api);
        const dispatchFunc = editNote(note2._id, newNote);

        dispatchFunc(dispatch)
            .then(() => {
                expect(dispatch).toHaveBeenCalledWith({type: actions.REWRITE_NOTE, payload:newNote});
            });
    });

    it('can delete notes',() => {
        expect.assertions(1);
        const foeNote = {_id:'21kl34lkd0oprsdf', title: 'delete me!'};
        const api = {delete: (id) => Promise.resolve(foeNote)};

        const dispatch = jest.fn();

        const removeNote = deleteNote(api);
        const dispatchFunc = removeNote(foeNote._id);
        dispatchFunc(dispatch)
            .then(() => {
                expect(dispatch).toHaveBeenCalledWith({type: actions.DELETE_NOTE, payload:foeNote});
            });
    });

    it('gets all the notes', () => {
        const notes = [{title:'daily meal plans'}];
        const api = { getAll: () => Promise.resolve(notes) };
        const dispatched = [];
        const dispatch = (action) => {
            dispatched.push(action);
        };

        const getNotes = fetchNotesData(api);
        return getNotes()(dispatch)
            .then(() => {
                expect(dispatched).toEqual([
                    {type: actions.FETCHING_NOTES },
                    {type: actions.FETCHED_NOTES, payload: notes }
                ]);
            });
    });
});