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
    status: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload}
        case PASSWORD_CHANGED:
            return {...state, password: action.payload}
        case LOGIN_SUCCESS:
            // reset to initial state if login successful 
            return {...state, ...INITIAL_STATE, status: 'Logged in!', userData: action.payload}
        case LOGIN_START:
            return {...state, loading: true}
        case LOGIN_ERROR:
            return {...state, ...INITIAL_STATE, status: 'Login error!'}
        default:
            return state;
    };
};