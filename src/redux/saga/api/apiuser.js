import axios from 'axios'

export const apiGetUser = () => {
    return axios.get('https://randomuser.me/api/')
        .then(res => {
            return res.data.results
        })
}