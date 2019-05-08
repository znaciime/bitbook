import { BASE_API_URL } from '../shared/constants'
import { Auth } from './AuthService';

export const postComm = (postId, data) => {

    const body = {
        postId: postId,
        body: data,
        isPublic: true
    }

    const myFetch = fetch(BASE_API_URL + '/comments', {
        method: 'POST',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': Auth.getUserToken()
        }),
        body: JSON.stringify(body)
    })
        .then(res => res)

    return myFetch
};


export const deleteComment = (id) => {

    const myFetch = fetch(`${BASE_API_URL}/comments/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': Auth.getUserToken()
        })
    })
        .then(res => res)

    return myFetch
}



