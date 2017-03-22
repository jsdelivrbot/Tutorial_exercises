/**
*
* @summary : Provide end/start lat/lng for user to enter location details
*
*/

//React modules
import React, { Component } from 'react';

//Redux modules
import { connect } from 'react-redux';
import { addLocation, findServices } from '../../actions';

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
    this.state = { 
      name: ''
     }
    try{
      this.locationManager = new LocationUtil();
    }catch(e){
      throw Location.util.raiseError('LocationUtil did not load correctly', 'LocationUtil.js')
    }
    this._retrieveSelectedLocation = this._retrieveSelectedLocation.bind(this);
    this._setName = this._setName.bind(this);
  }

  //Set state and span name on user input change
  _setName(e){
    this.setState({ name: e.target.value });
  }


  //Set user location based on locationManagers returned
  //area
  _set(){
    return this.locationManager.getComponentRestrictions()
  }

  //Retrieve lat/lng from auto complete //possibly start and end 
  _retrieveSelectedLocation(location, end){
    const { lat, lng } = location.geometry.location;
    switch(end){
      case 'start':
        const startLat = lat();
        const startLng = lng();
        this.props.addLocationAction({ startLat, startLng });
        break;
      case 'end': 
        const endLat = lat();
        const endLng = lng();
        this.props.addLocationAction({ endLat, endLng });
        break;   
    }
  }

  //Render search 
  render(){
    return(
      <section className="location-container">

        {/* Name selection */}
        <div className="location-name-wrap">
          <span> Name:: </span>
          <input className="location-name-input"
            value={this.state.name}
            onChange={(e) => this._setName(e)}/>
        </div>
        
        {/* Start destination input */}
        <AutoComplete
          style={googAutoStyles}
          type={['address']}
          componentRestrictions={this._set()}
          onPlaceSelected={(place) => {this._retrieveSelectedLocation(place, 'start') }}
        />

        {/* End destination input */}
        <AutoComplete
          style={googAutoStyles}
          type={['address']}
          componentRestrictions={this._set()}
          onPlaceSelected={(place) => {this._retrieveSelectedLocation(place,'end')}}
        />

        {/* Submit to application */}
        <button className="location-submit"
          onClick={()=> this.props.findServiceAction(this.state.name)}> 
        Submit </button>
      </section>
    )}

}//end of class

//Map add_location and findService action to component props
const mapDispatchToProps = (dispatchEvent) => ({
  addLocationAction: (location) => dispatchEvent(addLocation(location)),
  findServiceAction: (name) => dispatchEvent(findServices(name))
})

export default connect(null, mapDispatchToProps)(Location);
