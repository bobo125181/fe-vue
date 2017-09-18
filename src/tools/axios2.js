import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://localhost:8080',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
function handleError (error) {
  toast.toastDanger(error.message || 'request error')
  console.error(error)
  Promise.reject(error)
}
export const post = (url, data) => {
  return instance
    .post(url, data)
    .catch(handleError)
}
  
