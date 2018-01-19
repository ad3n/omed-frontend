import * as constants from './constants';
import axios from 'axios';
import {USER_LOGGED_IN} from "./constants";
import { decodeToken } from './util';

/*export const login = data => dispatch => {
  dispatch({
    type: constants.USER_LOGGING_IN
  });
  // Wait 2 seconds before "logging in"
  setTimeout(() => {
    dispatch({
      type: constants.USER_LOGGED_IN,
      payload: data
    })
  }, 2000)
};*/

const ROOT_URL = 'http://localhost/login_check';

export function login(data){
    return function(dispatch){
        const config = {
            headers: {
                'Accept': 'application/ld+json',
                'Content-Type': 'application/json'
            },
            json: true
        };
        axios.post(ROOT_URL,JSON.stringify(data),config)
            .then(response => {
                const token = response.data.token;
                const payload = decodeToken(token);
                payload.token = token;
                dispatch({type: USER_LOGGED_IN,payload: payload});
                localStorage.setItem('token',response.data.token);
            })
            .catch(() => {

            })
        ;
    }
}

export function logout() {
    return {
        type: constants.USER_LOGGED_OUT
    }
}