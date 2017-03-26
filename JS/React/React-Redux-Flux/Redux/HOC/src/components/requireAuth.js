//HOC

import React, { Component } from 'react';
import { connect } from 'react-redux';

//Exported HOC function wraps over class being pushed 
//through. Props/Dispatch are mapped outside the class but 
//within the HOC. HOC then wraps the route in routes.js
export default function(ComposedComponent){
	
	class Authentication extends Component {
		
		//Define context type property
		static contextTypes = {
			router: React.PropTypes.object
		}

		//If user is not authenticated then push back 
		//to the home route
		componentWillMount(){
			if(!this.props.authenticated){
					this.context.router.push('/')
			}
		}

		//Called when component recieves updated props
		componentWillUpdate(nextProps){
			if(!nextProps.authenticated){
				this.context.router.push('/')
			}
		}

		//Render wrapped component
		render(){
			console.log(this.context)
			return <ComposedComponent {...this.props} />
		}
	
}//end of class

	//Map redux state to HOC 
	function mapStateToProps(reduxState){
		return {
			authenticated: reduxState.reduxAuthentication
		}
	}

	//Wrap HOC in wrapped connect function
	return connect(mapStateToProps)(Authentication);


}//end of function







/**

//Base structure

import React, { Component } from 'react';


export default function(ComposedComponent){
	
	class Authentication extends Component {
		render(){
			return <ComposedComponent {...this.props} />
		}
	}

	return Authentication;

}//end of class
 * 
 */