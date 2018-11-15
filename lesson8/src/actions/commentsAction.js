import {GET_COMMENTS, GET_COMMENTS_BY_POST} from '../constants/commentsConstants';
import axios from 'axios';

export function getComments(){
    return {
        type: GET_COMMENTS,
        payload: axios.get("http://localhost:8082/api/comments")
    };
}

export function getCommentsByPost(postId){
    return {
        type: GET_COMMENTS_BY_POST,
        payload: axios.get(`http://localhost:8082/api/posts/${postId}/comments`)
    };
}