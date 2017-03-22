//Uber details
import { buildUberRequest, UBER_HEADERS } from '../../config.js';

import { browserHistory } from 'react-router';

//Action Enums
//-------------

export const ADD_LOCATION = 'ADD_LOCATION';
export const FIND_SERVICES = 'FIND_SERVICES';

//Actions
//--------

//Pass either start or end lat/lng to reducer
export const addLocation = (location) => ({
    type: ADD_LOCATION,
    payload: location
})


//pass data to thunk middleware and process lng/lat a
export const findServices = (name) => {
   
   //returning a function rather than an object inkvokes
   //any middlewares in the application. 
   return (dispatchEvent, getState) => {

    //retrieve data from redux store
    const { startLat, startLng, endLat, endLng } = getState().location;

    //retrieve data from the UBER API
    fetch(buildUberRequest(startLat, startLng, endLat, endLng), {
        method: 'GET',
        headers: UBER_HEADERS,
    })
    .then((response) => { return response.json() })
    .then((jsonResponse) => {
        
        //now the action can be dispatched once the middleware 
        //has run
        dispatchEvent({
            type: FIND_SERVICES,
            payload: jsonResponse.prices
        });

        //change nested child component view to services component
        browserHistory.push(`/services/${name}`);
      
    });//end of fetch request

   }//end of middleware
   
}//end of action