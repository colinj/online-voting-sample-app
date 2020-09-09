import Axios from 'axios'

const axios = Axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json',
  timeout: 5000,
})

export default axios
