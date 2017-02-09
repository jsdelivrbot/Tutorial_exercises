/*********************************************************
* @description :  MAIN APPLICATION COMPONENT
***********************************************************/

//react/native/style modules
import React, { Component } from 'react';
import styles from './styles/Styles';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

//Application components
import InputButton from './components/InputButton';
import inputButtons from './data/buttons';

class Calculator extends Component {

  constructor(props){
    super(props);
    this._onInputButtonPressed = this._onInputButtonPressed.bind(this);
  }

  //Return button row
  _renderInputButtons() {
    let views = [];
    for (var r = 0; r < inputButtons.length; r ++) {
       let row = inputButtons[r];
       let inputRow = [];
       for (var i = 0; i < row.length; i ++) {
           let input = row[i];
           inputRow.push( <InputButton
             value={input}
             onPress={this._onInputButtonPressed(input)}
             key={r + "-" + i} /> );
          }
          views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
      }
      return views;
  }

  // <!-- Add logic [Not calling correctly]
  _onInputButtonPressed(input){
    alert(input);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lcd}></View>
        <View style={styles.button}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

}//end of class


export default styles;

AppRegistry.registerComponent('HouseShare', () => Calculator);
