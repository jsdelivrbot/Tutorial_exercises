/**
*
* @summary : Provide end/start lat/lng for user to enter location details
*
*/

//React modules
import React, { Component } from 'react';

//Redux modules
import { connect } from 'react-redux';
import { addLocation } from '../../actions';

//External modules
import AutoComplete from 'react-google-autocomplete';
import LocationUtil from '../../utils/locationutil';


const googAutoStyles = {
  height: '30px',
  width: '90%',
  borderRadius: '5px',
  border: '1px solid blue',
  margin: '10px auto'

}

class Location extends Component {

  //Create an instantion of locationManager class
  constructor(props){
    super(props);
    try{
      this.locationManager = new LocationUtil();
    }catch(e){
      throw Location.util.raiseError('LocationUtil did not load correctly', 'LocationUtil.js')
    }
    this._retrieveSelectedLocation = this._retrieveSelectedLocation.bind(this);
  }

  //Set user location based on locationManagers returned
  //area
  _set(){
    return this.locationManager.getComponentRestrictions()
  }

  //Retrieve lat/lng from auto complete //possibly start and end 
  _retrieveSelectedLocation(location, end){
    console.log(location);
    const { lat, lng } = location.geometry.location;
    switch(end){
      case 'start':
        const startLat = lat();
        const startLng = lng();
        this.props.addLocationAction({ startLat, startLng });
        break;
      case 'end': 
        const endLat = lat();
        const endlng = lng();
        this.props.addLocationAction({ endLat, endlng });
        break;   
    }
  }

  //Render search 
  render(){
    return(
      <section className="location-container">
        <h4> location component working </h4>
        <AutoComplete
          style={googAutoStyles}
          type={['address']}
          componentRestrictions={this._set()}
          onPlaceSelected={(place) => {this._retrieveSelectedLocation(place, 'start') }}
        />
        <AutoComplete
          style={googAutoStyles}
          type={['address']}
          componentRestrictions={this._set()}
          onPlaceSelected={(place) => {this._retrieveSelectedLocation(place,'end')}}
        />
      </section>
    )}

}//end of class

//Map add_location to to props
const mapDispatchToProps = (dispatchEvent) => ({
  addLocationAction: (location) => dispatchEvent(addLocation(location))
})

export default connect(null, mapDispatchToProps)(Location);
