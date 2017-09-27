import { request } from '../auth/request';

export default {
    getAll(id) {
        return request.get(`/folders/${id}/notes`);
    },
    get(id) {
        return request.get(`/notes/${id}`);
    },
    add(data) {
        return request.post('/notes',data);
    },
    delete(id) {
        return request.delete(`/notes/${id}`);
    },
    update(id, data) {
        return request.put(`/notes/${id}`,data);
    }
};