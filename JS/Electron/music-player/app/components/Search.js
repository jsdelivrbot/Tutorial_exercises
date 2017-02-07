import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

export default class extends Component{

  constructor(props){
    super(props);
    this.handleRenderItem = this.handleRenderItem.bind(this);
  }

  handleRenderItem(item, isHighlighted){
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },
      highlightedItem: {
        color: 'white',
        background: '#F38B72',
        padding: '2px 6px',
        cursor: 'default'
      }
    }
    return(
      <div
        style={isHighlighted ? listStyles.highlightedItem : listStyles.item }
        key={item.id}
        id={item.id}
      >{item.title}</div>
    );
  }

  render(){
    return(
      <div className="search">

        {/* Autocomplete */}
        <Autocomplete
          ref="autocomplete"
          inputProps={{title:"title"}}
          value={this.props.autoCompletValue}
          items={this.props.tracks}
          getItemValue={(item) => item.title }
          onSelect={this.props.handleSelect}
          onChange={this.props.handleChange}
          renderItem={this.handleRenderItem}
        />

      </div>
    );
  }

}
