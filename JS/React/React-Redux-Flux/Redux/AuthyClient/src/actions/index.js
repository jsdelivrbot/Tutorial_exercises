import axios from 'axios';
const ROOT_URL = 'http://localhost:3000';


//Send email / password to server for validation
//and rerroute based on returned information
export function signinUser({ email, password }){

  return function(dispatch){

    axios.post(`${ROOT_URL}/signin`, { email: email, password: password });

  }

}
  //Return fu
