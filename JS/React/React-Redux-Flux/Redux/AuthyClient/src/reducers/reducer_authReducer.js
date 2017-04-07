import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_DETAILS } from '../actions/types'

export default function(state={}, action){
  switch(action.type)
  {
    case AUTH_USER:
      return {...state, authenticated: true, error: '', message: false};
    case UNAUTH_USER:
      return {...state, authenticated: false, message: false};
    case AUTH_ERROR:
      return {...state, error: "Could not log in"}
    case FETCH_DETAILS:
      return { ...state, message: action.payload }
  }

  return state;
}
