import React, { Component } from 'react';
import { graphql } from 'react-apollo'


class LyricList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <div>

          </div>
        </li>
      </ul>
    )
  }
}


export default graphql(query)(LyricList)
