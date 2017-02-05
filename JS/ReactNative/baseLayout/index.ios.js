import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './app/app';

export default class baseLayout extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

AppRegistry.registerComponent('baseLayout', () => baseLayout);
