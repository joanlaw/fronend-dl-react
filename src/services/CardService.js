import http from '../http-common'

const getAll = () => {
    return http.get('cartas');
}

const getById = (id) => {
    return http.get(`cartas/${id}`)
}

const create = (data) => {
    return http.post('cartas', data)
}

const update = (id, data) => {
    return http.put(`cartas/${id}`, data)
}

const remove = (id) => {
    return http.delete(`cartas/${id}`);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};
