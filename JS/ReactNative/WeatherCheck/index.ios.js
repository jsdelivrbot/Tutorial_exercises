/**
 * Basic React Native Weather application
 */

import React, { Component } from 'react';
import Forecast from './components/Forecast';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
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
    this._handleTextChange = this._handleTextChange.bind(this);
    this.state = {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'Few clouds',
        temp: 46.2
      }
    };
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

      <Image source={require('./images/background.png')}
        resizeMode='cover'
        style={styles.backdrop}>
          {/* BG and form container */}
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Zip: {this.state.zip}
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.mainText, styles.zipCode]}
                  returnKeyType="go"
                  onSubmitEditing={this._handleTextChange}
                  />
              </View>
            </View>
              {/* Forecast component */}
              <Forecast
                main={this.state.forecast.zip}
                description={this.state.forecast.description}
                temp={this.state.forecast.temp}
                />
            </View>
          </Image>
    );
  }
}

//Component styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode: {
    width: 50,
    height: 16
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    color: '#FFF'
  }

});

AppRegistry.registerComponent('WeatherBasic', () => WeatherBasic);
