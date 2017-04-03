import { AUTH_USER, UNAUTH_USER } from '../actions'

export default function(state={}, action){
  switch(action.type)
  {
    case AUTH_USER:
      return {...state, authenticated: true, message: false};
    case UNAUTH_USER:
      return {...state, authenticated: false, message: false};
    case ERROR:
      return {...state, message: action.payload}
  }
  return state;
}
