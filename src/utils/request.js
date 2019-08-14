import axios from 'axios'
import config from '../config/index'

const service = axios.create({
    baseURL: config.baseURL,
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
