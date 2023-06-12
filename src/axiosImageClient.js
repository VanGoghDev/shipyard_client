import axios from 'axios'

const axiosImageClient = axios.create({
    baseURL: 'https://api.slingacademy.com/v1/sample-data',
});

export default axiosImageClient;