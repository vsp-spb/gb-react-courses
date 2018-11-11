import {GET_POSTS, ADD_POST, EDIT_POST, DELETE_POST} from '../constants/postsConstants';
import axios from 'axios';

export function getPosts(){
    return {
        type: GET_POSTS,
        payload: axios.get("https://jsonplaceholder.typicode.com/posts")
    };
}

export function addPost(title, body, userId){
    return {
        type: ADD_POST,
        payload: {title, body, userId}
    };
}

export function editPost(postId, title, body){
    return {
        type: EDIT_POST,
        payload: {postId, title, body}
    };
}

export function deletePost(postId){
    return {
        type: DELETE_POST,
        payload: postId
    };
}