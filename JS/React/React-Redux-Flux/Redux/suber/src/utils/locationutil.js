/**
 * @summary  : Utility class to determine users location and return correct auto 
 *             auto settings for google auto complete
 */

import { GOOGBASE, KEY } from '../../config';
import axios from 'axios';

export default class utilLocation {

    //set up class variables and call _setCoordinates function
    //determine user location
    constructor(lat = '', lng = '')
    {
        this.lat = lat;
        this.lng = lng;
        this.successInGetttingLocation = false;
        this.countryPrefix = null
        if(this.lat == ''){
            this._setCoordinates();
        }
    }

              
    /**
     *  
     *  Public API
     * 
     */ 
    
    //Return component restrictions object based on browser 
    //coordinates
    getComponentRestrictions(){
        if(this.countryPrefix){
            return { country: this.countryPrefix }
        } else{
            return { country: 'UK' }
             }
        }

    //Returns boolean to the client if class successfuly retrieved lat/lng
    default(){
        return {
            country: 'UK'
        };
    }    

    //Throw error to browser console if could not initialize correctly
     static raiseError(message, type){
         return new LocationException(message,type);
     }   

                  
    /**
     * 
     * Private methods
     * 
     */

    //Retrieve coordinates from user via browser and
    //set class instance variables to match lat and lng
    _setCoordinates()
    {
        //determine presence of HTML geolocation API
       if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition((position)=>{
               console.log(position);
            const { latitude, longitude } = position.coords;
            this.lat = latitude;
            this.lng = longitude;
            this.successInGetttingLocation = true 
            this._determineCountry(this.lat, this.lng);  
           });
       }else{
           throw new LocationException('HTML5 geolocation not available','HTML5' )
       }
    }

    //Call google API to get and set lat, lng and country 
    //class variables 
    _determineCountry(lat,lng){
        const API_STRING = `${GOOGBASE}${lat},${lng}${KEY}`;
        axios.get(API_STRING)
            .then((response) => {
                this._processResponse(response);
                this.successInGetttingLocation = true;
            })
            .catch((error) => {
                throw new LocationException(
                    "Could not identify browser location", 
                    "Location");
             });
    }

    //Process successful response and store returned 
    //data to class
    _processResponse(response){
        if(response.status == 200){
            this.prefix = response.data.results[0].address_components[6].short_name;
            console.log(this.prefix);
    }
        else{
            const { error_message, status } = response.data;
            throw new LocationException(error_message, status)
        }
    }

}//end of class


//Exception function
function LocationException(message, type){
    this.message = message;
    this.name = type;
}

