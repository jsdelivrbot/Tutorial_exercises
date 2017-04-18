import React, { Component } from 'react';
import { connect } from 'react-redux';


const CommentsList = (props) => {
	const list = props.comments.map(comment => <li key={comment}>{comment}</li>)
	return(
		<ul className="comments-list">
			{list}
		</ul>
	)
}

//Map component props to application state
const mapStateToProps = (reduxState) => {
	return {
		comments: reduxState.comments
	}
}

export default connect(mapStateToProps)(CommentsList);
