/**
 *
 *  @summary : Handle actions for application authentication
 * 	@actions : (1) signinUser
 *             (2) signoutUser
 *             (3) signupUser
 *             (4) fetchUserData
 *
 */

//Import Action enums
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_DETAILS } from './types';

//Import
import axios from 'axios';
import { browserHistory } from 'react-router';
const ROOT_URL = 'http://localhost:3000';


//Send email / password to server for validation
//and rerroute based on returned information
export function signinUser({ email, password }){

  //return thunk middleware function
  return function(dispatch){

    /**
    * Carry out all middleware logic inside the returned function. Only when
    * dispatch is called do we return the object
    */

    //post email/password to server and update state based on
    //successfull authentication
    axios.post(`${ROOT_URL}/signin`, { email: email, password: password })
         .then((response) => {
           if(response.status == 200){
             //save jwt to local storage
             localStorage.setItem('token', response.data.token);

             //dispatch authenticated action
             dispatch({
               type: AUTH_USER
             });

            //redirect user to /feature route
            browserHistory.push('/feature');
           }
           //User has not been authenticated
           else{
             dispatch({
               type: UNAUTH_USER
             })
           }
         })
         .catch((err) => {
           dispatch({
             type: AUTH_ERROR,
             payload: "Error signing in"
           })
         })

       }//end of wrapped middleware function

}//end of signin user function


// Change signin boolean to false and remove token from local
// storage
export function signoutUser(){
  localStorage.removeItem('token');
  return{
    type: UNAUTH_USER,
  }
}

//Handle user submitting new application to server
export function signupUser(obj){

  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, { email: obj.email, password: obj.password })
         .then((response) => {
           console.log(response)
           dispatch({
             type: AUTH_USER
           });
           localStorage.setItem('token', response.data.token);
           browserHistory.push('/feature');
         })
         .catch((error) => {
           dispatch({
             type: AUTH_ERROR,
             payload: error
           })
         })
    }//end of inner function
}

//Handle server request to obtain user specific information on page - Header
//needs to include user auth token
export function fetchUserData(){

  return function(dispatch){
    axios.get(`${ROOT_URL}/user`, {
        headers: { authorization: localStorage.getItem('token') }
    })
    .then((response) => {
       dispatch({
         type: FETCH_DETAILS,
         payload: response.data.message
       })
     })
  }
}
