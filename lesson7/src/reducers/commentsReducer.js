import * as CommentsConstants from '../constants/commentsConstants';

export function commentsReducer(state = {
    comments: [],
    is_loading: false,
    postComments: []
}, action) {
    switch (action.type) {
        case CommentsConstants.GET_COMMENTS_PENDING:
            {
                state = { ...state,
                    is_loading: true
                };
                break;
            }
        case CommentsConstants.GET_COMMENTS_FULFILLED:
            {
                state = { ...state,
                    is_loading: false,
                    comments: action.payload.data
                };
                break;
            }
        case CommentsConstants.GET_COMMENTS_REJECTED:
            {
                state = { ...state,
                    is_loading: false,
                    errorMessage: action.payload.message
                };
                break;
            }
        case CommentsConstants.GET_COMMENTS_BY_POST_PENDING:
            {
                state = { ...state,
                    postComments: []
                };
                break;
            }
        case CommentsConstants.GET_COMMENTS_BY_POST_FULFILLED:
            {
                state = { ...state,
                    postComments: action.payload.data
                };
                break;
            }
        case CommentsConstants.GET_COMMENTS_BY_POST_REJECTED:
            {
                state = { ...state,
                    errorMessage: action.payload.message
                };
                break;
            }
    }
    return state;
}