import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR,
    LOGIN_START
} from './types';
import firebase from 'firebase';

export const emailChanged = email => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};

export const passwordChanged = password => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
};

const loginUserFailure = (dispatch, error) => {
    dispatch({
        type: LOGIN_ERROR,
        payload: error
    });
};

export const checkLogin = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_START});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(error => {
            // firebase.auth().createUserWithEmailAndPassword(email, password)
            // .then(user => loginUserSuccess(dispatch, user));

            loginUserFailure(dispatch, error);
        })
    };
};