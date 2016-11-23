/* SEARCHBAR COMPONENT
=====================*/

import React , {Component} from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  /**
  * @param -> this explicitly passed via bind in attached handler below
  */
  onChange(inputValue){
    this.setState({searchValue: inputValue});
    this.props.passToMainComponent(inputValue);
  }

  render(){
    return(
      <input
        value={this.state.value}
        onChange={e => this.onChange(e.target.value)}
        />
    )

  }

}

export default SearchBar;



/*
<h5>{this.state.searchValue}</h5>
<h6>{this.state.secValue}</h6>
<input onChange={e => this.setState({secValue: e.target.value})} />
<input onChange={this.onChange.bind(this)}/>
<input
  value={this.state.correct}
  onChange={e => this.setState({correct: e.target.value})}
  />
  */
