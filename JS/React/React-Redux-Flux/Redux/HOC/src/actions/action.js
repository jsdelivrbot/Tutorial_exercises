import { CHANGE_AUTH } from'./types.js';

//Send action to reducer indicating user logged in / out
export const authenticate = (isLoggedIn) => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}