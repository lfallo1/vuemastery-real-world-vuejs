import axios from 'axios'
// import NProgress from 'nprogress'

const apiClient = axios.create({
    baseURL: 'http://localhost:3333',
    withCredentials: false,
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    timeout: 10000
})

apiClient.interceptors.request.use(config =>{
    // NProgress.start();
    return config;
});

apiClient.interceptors.response.use(res =>{
    // NProgress.done();
    return res;
});

export function getEvents(perPage, page){
    return apiClient.get(`events?_limit=${perPage}&_page=${page}`)
}

export function getEvent(id){
    return apiClient.get('/events/' + id)
}

export function postEvent(event){
    return apiClient.post('/events', event)
}

export default {getEvents, getEvent};