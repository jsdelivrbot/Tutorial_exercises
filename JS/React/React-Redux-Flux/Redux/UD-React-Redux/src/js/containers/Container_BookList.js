/**
* @summary - Container (Smart component) used to link react up with reducer
*            information held in the reducers folder
*/

import React, { Component } from 'react';

//Import redux modules
import { connect } from 'react-redux';

//Import action creator
import { selectBook, modifyTitle } from '../actions/index';

//Ensure action created flows to the reducer
import { bindActionCreators } from 'redux';

//-----------------------------------------------------------------------------

class BookList extends Component {

  constructor(props){
    super(props);
    this.state = {
      newBook: 'long KLO'
    };
  }

  /**
  * @function Recieves array of objects from reducer function and generates <li>s
  * @return <li> items of books
  */
  renderList(){
    return(
      this.props.books.map((book) => {
        return(
          <li
            key={book.title}
            onClick={ () => this.props.selectBook(book)}
            className="list-group-item">{book.title}
            <button
              className="btn btn-success"
              onClick={ ()=> this.props.modifyTitle(book.title)}
              >Modify title
            </button>
          </li>
        );
      })
    );
  }

  /**
  * @return List items of books held in the reducers
  */
  render(){
    return(
      <div className="col-md-8 col-md-offset-2">
        {this.state.newBook}
        <ul className="col-sm-4 list-group">
          {this.renderList()}
        </ul>
    </div>
    );
  }

} //end of BookList class

//-----------------------------------------------------------------------------

/**
* @param - Current application state
* @return - Whatever is returned will show up as props inside of BookList container
*/
function mapStateToProps(state){
  return{
    //Everything returned will be props on the BookList container
    books: state.books
  }
}

/**
* @summary - whenever selectBook is called it should be passed to all the reducers
* currently held in 'reducers/index.js'
* @param {function} dispatch ensures that all reducers receive the object
* @return - anything returned from this function will end up as props on the
* bookList container
*/
function mapDispatchToProps(dispatch){
  //selectBook refers to the action creator that was imported @ the top.
  return bindActionCreators({
    selectBook, selectBook,
    modifyTitle, modifyTitle
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
