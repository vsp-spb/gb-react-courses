import * as UsersConstants from '../constants/usersConstants';
import merge from 'lodash/merge';

export function usersReducer(state = {
    users: [],
    is_loading: false,
    user: null
}, action) {
    switch (action.type) {
        case UsersConstants.GET_USERS_PENDING:
            {
                state = { ...state,
                    is_loading: true,
                    user: null
                };
                break;
            }
        case UsersConstants.GET_USERS_FULFILLED:
            {
                state = { ...state,
                    is_loading: false,
                    users: action.payload.data,
                    user: null
                };
                break;
            }
        case UsersConstants.GET_USERS_REJECTED:
            {
                state = { ...state,
                    is_loading: false,
                    errorMessage: action.payload.message
                };
                break;
            }
        case UsersConstants.GET_USER_BY_ID:
            {
                let index = null;
                state.users.forEach((value, i) => {
                    if (parseInt(value.id) === parseInt(action.payload)) {
                        index = i;
                    }
                });
                if(index !== null){
                    state = merge({}, state);
                    state.user = {...state.users[index]};
                }
                break;
            }
    }
    return state;
}