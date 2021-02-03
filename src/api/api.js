import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const postsApi = {
    getPosts() {
        return instance.get('posts')
            .then(response => response.data)
    }
}

export const usersApi = {
    getUsers() {
        return instance.get('users')
            .then(response => response.data)
    }
}