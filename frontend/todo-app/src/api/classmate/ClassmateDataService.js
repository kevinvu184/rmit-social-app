import axios from 'axios'
import { JPA_API_URL } from '../../Constants'

class ClassmateDataService {
    retrieveAllClassmates(name) {
        return axios.get(`${JPA_API_URL}/users/${name}/classmates`);
    }

    updateClassmate(name, id, classmate) {
        return axios.put(`${JPA_API_URL}/users/${name}/classmates/${id}`, classmate);
    }

    retrieveClassmate(name, id) {
        return axios.get(`${JPA_API_URL}/users/${name}/classmates/${id}`);
    }

    createClassmate(name, classmate) {
        return axios.post(`${JPA_API_URL}/users/${name}/classmates/`, classmate);
    }

    deleteClassmate(name, id) {
        return axios.delete(`${JPA_API_URL}/users/${name}/classmates/${id}`);
    }
}

export default new ClassmateDataService()