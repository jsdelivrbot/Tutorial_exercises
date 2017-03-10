import React ,{ Component } from 'react';

//Wire up
import { connect } from 'react-redux';


class BookDetail extends Component {

  render(){
    if(!this.props.book){
      return(
        <h4> Select a book to get started </h4>
      );
    }
    
    return(
      <div>
        <h4> Book currently selected : {this.props.book.title} </h4>
      </div>
    );
  }

}//end of class

function mapStateToProps(state){
  return{
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
