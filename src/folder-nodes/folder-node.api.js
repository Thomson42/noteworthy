import { request } from '../auth/request';
export const API_URL = '/api/folders';

export default {
    getAll() {
        return request.get('/folders');
    },
    get(id) {
        return request.get(`/folders/${id}`);
    },
    add(data) {
        return request.post('/folders',data);
    },
    delete(id) {
        return request.delete(`/folders/${id}`);
    },
    update(id, data) {
        return request.put(`/folders/${id}`,data);
    }
};
