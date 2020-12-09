import axios from 'axios'

const httpService = axios.create({
    baseURL: 'http://localhost:8080'
})

export default httpService