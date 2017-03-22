/**
*
* @summary : Show types of transportation available
*
*/

//React modules
import React, { Component } from 'react';
import { Link } from 'react-router';

//Redux modules
import { connect } from 'react-redux';
import { addLocation, findServices } from '../../actions';

//Services class
class Services extends Component {

		// Render list of available rides matching 
    _renderServices(services){
			return services.map((service) => {
				return(
					<li key={service.product_id}>
						<span>
							<h4>{service.display_name} :: {service.estimate} </h4>
						</span>
					</li>
					)
			})
    }

    render(){   
      const { userName } = this.props.params;
      return(
        <section className="services-wrapper">
          <h1> Hi {userName} </h1>
          <ul>
            {this._renderServices(this.props.services)}    
          </ul>
					<Link to={"/"}> New search </Link>   
        </section>
      )
    }

}//end of class 

//map services store to react component
const mapStateToProps = (reduxState) => {
  return{
    services: reduxState.services
  }
}

export default connect(mapStateToProps)(Services);