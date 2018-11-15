import {GET_POSTS, ADD_POST, EDIT_POST, DELETE_POST, GET_POST_BY_ID} from '../constants/postsConstants';
import axios from 'axios';

export function getPosts(){
    return {
        type: GET_POSTS,
        payload: axios.get("http://localhost:8082/api/posts")
    };
}

export function addPost(title, body, userId){
    return {
        type: ADD_POST,
        payload: axios.post("http://localhost:8082/api/posts", {id: randomInteger(10, 10000), title: title, body: body, userId: userId})
    };
}

export function editPost(postId, title, body){
    return {
        type: EDIT_POST,
        payload: axios.put(`http://localhost:8082/api/posts/${postId}`, {title: title, body: body})
    };
}

export function deletePost(postId){
    return {
        type: DELETE_POST,
        payload: axios.delete(`http://localhost:8082/api/posts/${postId}`)
    };
}

export function getPostById(postId){
    return {
        type: GET_POST_BY_ID,
        payload: axios.get(`http://localhost:8082/api/posts/${postId}`)
    };
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}