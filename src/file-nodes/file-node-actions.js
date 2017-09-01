import * as actions from './file-node-constants';
import api from '../api/noteworthy-api';

export const addTitle = (payload) => ({
    type: actions.ADD_TITLE,
    payload
});

