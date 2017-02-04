/**
 * Basic React Native Weather application
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class WeatherBasic extends Component {

  /**
  *  @constructor : Bind functions and set base zip state
  *  to nil
  */
  constructor(props){
    super(props);
    this.state = { zip: '' };
    this._handleTextChange = this._handleTextChange.bind(this);
  }

  /**
  *  @method : Set zip state to text input on user submission
  */
  _handleTextChange(e){
    this.setState({
      zip: e.nativeEvent.text
    })
  }

  /**
  *  @method : Render base component
  */
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.zip}
        </Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange} />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

//Component Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input:{
    fontSize: 20,
    borderWidth: 2,
    height: 40
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WeatherBasic', () => WeatherBasic);
