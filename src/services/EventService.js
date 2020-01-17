import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3333',
    withCredentials: false,
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
})

export function getEvents(){
    return apiClient.get('events')
}

export function getEvent(id){
    return apiClient.get('/events/' + id)
}

export default {getEvents, getEvent};