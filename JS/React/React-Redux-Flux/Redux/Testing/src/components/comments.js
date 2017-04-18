import React, {Component} from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions';

class CommentBox extends Component {

	constructor(props){
		super(props);
		this.state = { comment: '' }
	}

	//Update textarea via state object
	_handleChange(e){
		this.setState({ comment: e.target.value });
	}

	//Handle form submit via action creator
	//and clear text area
	_handleSubmit(e){
		e.preventDefault();
		this.props.saveCommentAction(this.state.comment);
		this.setState({ comment: '' });
	}

	render(){
		return(
			<form onSubmit={this._handleSubmit.bind(this)} className="comments-box">
				<textarea
					onChange={this._handleChange.bind(this)}
					value={this.state.comment}/>
				<button action="submit">Submit Comment</button>
			</form>
		)
	}
}

// Map action dispatcher to component
const mapDispatchToProps = (dispatchEvent) => {
	saveCommentAction: (comment) => dispatchEvent(saveComment(comment))
}

export default connect(null, mapDispatchToProps)(CommentBox)
