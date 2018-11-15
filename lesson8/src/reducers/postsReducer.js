import * as PostsConstants from '../constants/postsConstants';
import merge from 'lodash/merge';

export function postsReducer(state = {
    posts: [],
    is_loading: false,
    openedPost: null
}, action) {
    switch (action.type) {
        case PostsConstants.GET_POSTS_PENDING:
            {
                state = { ...state,
                    is_loading: true,
                    openedPost: null
                };
                break;
            }
        case PostsConstants.GET_POSTS_FULFILLED:
            {
                state = { ...state,
                    is_loading: false,
                    posts: action.payload.data,
                    openedPost: null
                };
                break;
            }
        case PostsConstants.GET_POSTS_REJECTED:
            {
                state = { ...state,
                    is_loading: false,
                    errorMessage: action.payload.message
                };
                break;
            }
        case PostsConstants.ADD_POST_FULFILLED:
            {
                state = merge({}, state);
                state.posts.push({...action.payload.data});
                break;
            }
        case PostsConstants.EDIT_POST_FULFILLED:
            {
                let index = null;
                state.posts.forEach((value, i) => {
                    if (parseInt(value.id) === parseInt(action.payload.data.id)) {
                        index = i;
                    }
                });
                if(index !== null){
                    state = merge({}, state);
                    state.posts[index] = {...action.payload.data}
                }
                break;
            }
        case PostsConstants.DELETE_POST_FULFILLED:
            {
                let index = null;
                state.posts.forEach((value, i) => {
                    if (parseInt(value.id) === parseInt(action.payload.data)) {
                        index = i;
                    }
                });
                if (index !== null) {
                    state = merge({}, state);
                    state.posts.splice(index, 1);
                }
                break;
            }
        case PostsConstants.GET_POST_BY_ID_FULFILLED:
            {
                state = merge({}, state);
                state.openedPost = {...action.payload.data};
                break;
            }
    }
    return state;
}