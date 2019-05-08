import { BASE_API_URL } from '../shared/constants'
import { Auth } from "./AuthService";


export const fetchPosts = () => {
    return fetchData('/posts')
}

export const fetchData = (str) => {
    const myFetch = fetch(BASE_API_URL + str, {
        method: 'GET',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': Auth.getUserToken()
        })
    })
        .then(res => res.json())

    return myFetch
};

export const deletePost = (postId) => {

    const myFetch = fetch(`${BASE_API_URL}/posts/${postId}`, {
        method: 'DELETE',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': Auth.getUserToken()

        }),
        
    })
        .then(res => res)

    return myFetch
};

export const createPost = (data) => {
    return fetch(BASE_API_URL + "/posts", {
        method: "POST",
        headers: new Headers({
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json",
            'Authorization': Auth.getUserToken()
        }),

        body: JSON.stringify({ ...data, isPublic: true })
    }).then(res => res.json());
}



