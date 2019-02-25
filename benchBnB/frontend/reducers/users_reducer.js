import {
    RECEIVE_CURRENT_USER,
    receiveCurrentUser
} from '../actions/session_actions';

import {merge} from 'lodash';

export const usersReducer = (state= {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {[action.user.id]: action.user});
        default: 
            return state;
    }

};