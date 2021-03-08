import {
    LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER
} from "../_actions/types"

 // eslint-disable-next-line
export default function(state ={}, action) {
    switch (action.type) {
        case LOGIN_USER:
            // nextState를 return하자. 이때 spread Operator를 사용해서 넘긴다.
            // (previousState, action) => nextState
            // payload를 loginSuccess에다 넘김
            return {...state, loginSuccess: action.payload};
        
        case REGISTER_USER:
            return {...state, register: action.payload};

        case AUTH_USER:
            return {...state, userData: action.payload};

        case LOGOUT_USER:
            return {...state};
            
        default:
            return state;
    }
}