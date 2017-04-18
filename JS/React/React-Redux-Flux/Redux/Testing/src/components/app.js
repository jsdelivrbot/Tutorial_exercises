import React, { Component } from 'react';
import CommentBox from './comments';
import CommentsList from './commentsList';

export default class App extends Component {

	render(){
		return(
			<div className="test-app">
				<h1> Component rendering </h1>
				<CommentBox />
				<CommentsList />
			</div>
		)
	}

}
