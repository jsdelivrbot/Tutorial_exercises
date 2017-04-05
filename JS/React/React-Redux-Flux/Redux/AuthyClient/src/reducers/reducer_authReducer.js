import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types'

export default function(state={}, action){
  switch(action.type)
  {
    case AUTH_USER:
      return {...state, authenticated: true, message: false};
    case UNAUTH_USER:
      return {...state, authenticated: false, message: false};
    case AUTH_ERROR:
      return {...state, error: "Could not log in"}
  }

  return state;
}
