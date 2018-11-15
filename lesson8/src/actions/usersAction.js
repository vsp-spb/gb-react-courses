import {GET_USERS, GET_USER_BY_ID} from '../constants/usersConstants';
import axios from 'axios';

export function getUsers(){
    return {
        type: GET_USERS,
        payload: axios.get("http://localhost:8082/api/users")
    };
}

export function getUserById(userId){
    return {
        type: GET_USER_BY_ID,
        payload: axios.get(`http://localhost:8082/api/users/${userId}`)
    };
}