import axios from 'axios'

export const RequestsAPI = {
    setSuccess(success: boolean) {
       return  axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success})
    }
}