import superagent from 'superagent';

export const API_URL = '/api/notes';

const wrapper = cmd => cmd
    .then(res => {
        return res.body;
    },
    ({ response }) => {
        throw response.body.error;
    }
    );
export default {
    getAll() {
        return wrapper(superagent.get('/api/notes'));
    },
    get(id) {
        return wrapper(superagent.get(`/api/notes/${id}`));
    },
    add(data) {
        return wrapper(superagent.post('/api/notes').send(data));
    },
    delete(id) {
        return wrapper(superagent.delete(`/api/notes/${id}`));
    },
    update(id, data) {
        return wrapper(superagent.put(`/api/notes/${id}`).send(data));
    }
};