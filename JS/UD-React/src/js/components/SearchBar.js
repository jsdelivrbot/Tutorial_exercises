/* SEARCHBAR COMPONENT
=====================*/

import React , {Component} from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchValue: 'null',
      secValue: 'sec',
      correct: ''
    };
  }

  /**
  * @param -> this explicitly passed via bind in attached handler below
  */
  onChange(e){
    this.setState({
      searchValue: e.target.value
    });
  }

  render(){
    return(
      <div>
        <h5>{this.state.searchValue}</h5>
        <h6>{this.state.secValue}</h6>
        <input onChange={e => this.setState({secValue: e.target.value})} />
        <input onChange={this.onChange.bind(this)}/>
        <input
          value={this.state.correct}
          onChange={e => this.setState({correct: e.target.value})}
          />
      </div>
    )

  }

}

export default SearchBar;
