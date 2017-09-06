import superagent from 'superagent';

export const API_URL = '/api/folders';

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
        return wrapper(superagent.get('/api/folders'));
    },
    get(id) {
        return wrapper(superagent.get(`/api/folders/${id}`));
    },
    add(data) {
        return wrapper(superagent.post('/api/folders').send(data));
    },
    delete(id) {
        return wrapper(superagent.delete(`/api/folders/${id}`));
    },
    update(id, data) {
        return wrapper(superagent.patch(`/api/folders/${id}`).send(data));
    }
};
//failed higher order function incomplete
// export function megaAgent(url, id, data, req) {
//     id = '/'+id;
//     const getAll = () => {
//         return wrapper(superagent.req('/api/folders'));
//     };
//     const get = () => {
//         return wrapper(superagent.req(`/api/${url}${id}`));
//     };
//     return get(); 

// }