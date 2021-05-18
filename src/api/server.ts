import axios, {AxiosInstance} from 'axios'


const env = import.meta.env


const instance: AxiosInstance = axios.create({
    baseURL: env.DEV ? env.VITE_BASE_URL : '',
    timeout: 60000,
    show: true
})

//请求拦截器
instance.interceptors.request.use(config => {

    return config
}, error => {
    return Promise.reject(error);
})
//相应拦截器
instance.interceptors.response.use(response => {
    return response.data;
}, error => {
    console.log(error)
    return Promise.reject(error);
})

export default instance