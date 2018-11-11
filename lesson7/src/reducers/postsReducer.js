import * as PostsConstants from '../constants/postsConstants';
import merge from 'lodash/merge';

export function postsReducer(state = {
    posts: [],
    is_loading: false
}, action) {
    switch (action.type) {
        case PostsConstants.GET_POSTS_PENDING:
            {
                state = { ...state,
                    is_loading: true
                };
                break;
            }
        case PostsConstants.GET_POSTS_FULFILLED:
            {
                state = { ...state,
                    is_loading: false,
                    posts: action.payload.data
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
        case PostsConstants.DELETE_POST:
            {
                let index = null;
                state.posts.forEach((value, i) => {
                    if (parseInt(value.id) === parseInt(action.payload)) {
                        index = i;
                    }
                });
                if (index !== null) {
                    state = merge({}, state);
                    state.posts.splice(index, 1);
                }
                break;
            }
        case PostsConstants.ADD_POST:
            {
                state = merge({}, state);
                let last = state.posts[state.posts.length - 1];
                state.posts.push({...action.payload, id: last.id + 1});
                break;
            }
        case PostsConstants.EDIT_POST:
            {
                let index = null;
                state.posts.forEach((value, i) => {
                    if (parseInt(value.id) === parseInt(action.payload.postId)) {
                        index = i;
                    }
                });
                if(index !== null){
                    state = merge({}, state);
                    state.posts[index] = {...state.posts[index], title: action.payload.title, body: action.payload.body}
                }
                break;
            }
    }
    return state;
}