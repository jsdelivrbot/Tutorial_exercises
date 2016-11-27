/**
* @summary - Container (Smart componenet) used to link react up with reducer
*            information held in the reducers folder
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//-----------------------------------------------------------------------------

class BookList extends Component {

  /**
  * @function Recieves array of objects from reducer function ans generates <li>s
  * @return <li> items of books
  */
  renderList(){
    return(
      this.props.books.map((book) => {
        return(
          <li key={book.title} className="list-group-item">{book.title}</li>
        );
      })
    );
  }

  /**
  * @return List items of books held in the reducers
  */
  render(){
    return(
      <ul className="col-sm-4 list-group">
        {this.renderList()}
      </ul>
    );
  }

} //end of BookList class

//-----------------------------------------------------------------------------

/**
* @function -
* @param - Current application state
* @return - Whatever is returned will show up as props inside of BookList container
*/
function mapStateToProps(state){
  return{
    books: state.books
  }
}

/**
* @function
* @summary - whenever selectBook is called it should be passed to all the reducers
* currently held in 'reducers/index.js'
* @param {function} dispatch ensures that all reducers receive the object
* @return - anything returned from this function will end up as props on the
* bookList container
*/
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectBook, selectBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
