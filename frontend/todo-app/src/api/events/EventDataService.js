import axios from "axios";
import {JPA_API_URL } from '../../Constants'

class EventDataService {
    getEvents(name) {
        console.log('EventDataService: getting events')
        return axios.get(`${JPA_API_URL}/users/${name}/events`)
    }

    getEventsByUsername(name) {
        console.log(`EventDataService: getting events for ${name}`)
        return axios.get(`${JPA_API_URL}/users/${name}/myevents`)
    }

    getEvent(name, id) {
        return axios.get(`${JPA_API_URL}/users/${name}/events/${id}`)
    }
    
    updateAttendEvent(name,id,event) {
        return axios.put(`${JPA_API_URL}/users/${name}/events/${id}/attend`,event)
    }

    deleteEvent(name, id) {
        return axios.delete(`${JPA_API_URL}/users/${name}/myevents/${id}`)
    }

    updateEvent(name, id, event) {
        console.log(name,id,event)
        return axios.put(`${JPA_API_URL}/users/${name}/myevents/${id}`, event)
    }

    
    createEvent(name, event) {
        return axios.post(`${JPA_API_URL}/users/${name}/myevents/-1`, event)
    }


    
}

export default new EventDataService();
