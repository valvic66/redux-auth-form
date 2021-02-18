import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_ERROR } from './types';
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

export const checkLogin = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            });
        })
        .catch(error => {
            dispatch({
                type: LOGIN_ERROR,
                payload: error
            });
        })
    };
};