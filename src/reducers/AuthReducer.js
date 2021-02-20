import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_SUCCESS,
    LOGIN_START,
    LOGIN_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    userData: null,
    statusText: '',
    isStatusError: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_START:
            return {...state, loading: true}
        case LOGIN_SUCCESS:
            return {...state, statusText: 'Logged in!',  isStatusError: false, userData: action.payload, loading: false,}
        case LOGIN_ERROR:
            return {...state, statusText: 'Login error!', isStatusError: true, loading: false}
        default:
            return state;
    };
};