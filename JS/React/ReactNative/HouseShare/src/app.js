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
    this.state = {
      inputValue: 0,
      previousInputValue: 0,
      selectedSymbol: null
    }
  }

  /**
  * @function : Render buttons from nested array of values
  */
  _renderInputButtons() {
    let views = [];
    for (var r = 0; r < inputButtons.length; r ++) {
       let row = inputButtons[r];
       let inputRow = [];
       for (var i = 0; i < row.length; i ++) {
           let input = row[i];
           inputRow.push( <InputButton
             value={input}
             highlight={this.state.selectedSymbol === input}
             onPress={this._onInputButtonPressed.bind(this, input)}
             key={r + "-" + i} /> );
          }
          views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
      }
      return views;
  }

  /**
  * @function : Handle user input depending on whether
  * it is numeric or an operator
  */
  _onInputButtonPressed(input){
    switch(typeof input){
      case 'number':
        return this._handleNumberInput(input)
        break;
      case 'string':
        return this._handleSymbol(input)
        break;
    }
  }

  /**
  * @function : Add value to current input state
  */
  _handleNumberInput(value){
    let input = (this.state.inputValue * 10) + value;
    this.setState({
      inputValue: input
    });
  }

  /**
  * @function : Shelve previous imput or complete
  * calculation based on symbol provided.
  */
  _handleSymbol(str){
    switch(str){
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
            inputValue = this.state.inputValue,
            previousInputValue = this.state.previousInputValue;
        if(!symbol){
          return;
        }
        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        })
        setTimeout(()=> { this.setState({ inputValue: 0 })},1500)
        break;
    }
  }


  /**
  * @function : Render compoenent to the screen
  */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.lcd}>
          <Text style={styles.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={styles.button}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

}//end of class


export default styles;

AppRegistry.registerComponent('HouseShare', () => Calculator);
