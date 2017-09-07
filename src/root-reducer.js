import { combineReducers } from 'redux';
//import auth from '../auth/reducers';
import { notes, notesError, notesLoading } from './notes/note-reducers';
import { folders, foldersError, foldersLoading } from './folder-nodes/folder-node-reducers';

export default combineReducers({
    //auth,
    folders,
    foldersError,
    foldersLoading,
    notes,
    notesError,
    notesLoading
});