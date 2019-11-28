import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class RegistrationDataService {

    registerUser(user) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/register`, user);
    }

}

export default new RegistrationDataService()