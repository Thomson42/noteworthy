import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import auth from './auth/reducers';
import { notes, notesError, notesLoading } from './notes/note-reducers';
import {folder, folders, foldersError, foldersLoading } from './folder-nodes/folder-node-reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth,
    folders,
    foldersError,
    foldersLoading,
    notes,
    notesError,
    notesLoading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    {}, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;