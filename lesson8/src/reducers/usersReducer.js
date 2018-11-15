import * as UsersConstants from '../constants/usersConstants';
//import merge from 'lodash/merge';

export function usersReducer(state = {users: [], is_loading: false, user: null}, action) {
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
        case UsersConstants.GET_USER_BY_ID_PENDING:
            {
                state = { ...state,
                    user: null
                };
                break;
            }
        case UsersConstants.GET_USER_BY_ID_FULFILLED:
            {
                state = { ...state,
                    user: action.payload.data
                };
                break;
            }
        case UsersConstants.GET_USER_BY_ID_REJECTED:
            {
                state = { ...state,
                    errorMessage: action.payload.message
                };
                break;
            }
    }
    return state;
}