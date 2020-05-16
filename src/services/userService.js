import { BASE_API_URL } from "../shared/constants";
import User from "../entities/User";
import jwt_decode from "jwt-decode";
import { Auth } from './AuthService';

export const fetchLogin = (data) => {
    return fetch(BASE_API_URL + "/auth/login", {
        method: "POST",
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data)
    }).then(res => res.json())
}




export const fetchRegister = (data) => {
    return fetch(BASE_API_URL + "/auth/register", {
        method: "POST",
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    }).then(res => res.json()
    ).then(res => {
        console.log(res)
        return res
    });
}



export const fetchSingleUser = (userId) => {
    const fetchSingle = fetch(`${BASE_API_URL}/users/${userId}?_embed[]=comments&_embed[]=posts`, {

        method: 'GET',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': Auth.getUserToken()
        })
    })
        .then(res => res.json())
       
        .then(({ id="", avatarUrl ="", name ="", about="" , comments=0 , posts=0 , createdAt=""  }) => {

            return new User(id, avatarUrl, name.first, name.last, about.bio, about.countryCode, about.job, comments.length, posts.length, createdAt)

        })

    return fetchSingle
}


export const fetchUsers = () => {
    const myFetch = fetch(BASE_API_URL + "/users/?_embed[]=comments&_embed[]=posts", {
        method: 'GET',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(data => data)

    return myFetch



}


export const profileUpdate = (data) => {
    const decode = jwt_decode(localStorage.getItem("token"))

    const myFetch = fetch(BASE_API_URL + `/users/${decode.id}`, {
        method: 'PATCH',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': Auth.getUserToken()

        }),
        body: JSON.stringify(data)
    })
        .then(res => res.json())

    return myFetch



}



