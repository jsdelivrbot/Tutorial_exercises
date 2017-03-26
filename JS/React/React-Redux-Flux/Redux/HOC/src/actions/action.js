import { CHANGE_AUTH } from'./types.js';

//user authenticated status
export function authenticate(isLoggedIn){
    return{
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}