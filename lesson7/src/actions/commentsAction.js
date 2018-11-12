import {GET_COMMENTS, GET_COMMENTS_BY_POST} from '../constants/commentsConstants';
import axios from 'axios';

export function getComments(){
    return {
        type: GET_COMMENTS,
        payload: axios.get("https://jsonplaceholder.typicode.com/comments")
    };
}

export function getCommentsByPost(postId){
    return {
        type: GET_COMMENTS_BY_POST,
        payload: axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    };
}