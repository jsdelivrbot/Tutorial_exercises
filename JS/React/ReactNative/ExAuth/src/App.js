/**
*
* @class: Main application container to render components
*
*/


import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

//Application modules
import config from '../config';
import { Header } from './reusables/resuablesPackage';

//Component modules
import LoginForm from './components/Form';

export default class App extends Component {

  constructor(props){
    super(props);
  }

  //Initalize firbase app on component load
  componentWillMount(){
    firebase.initializeApp(config);
  }

  //Render base
  render(){
    return(
      <View>
        <Header title="Authentication App"/>
        <LoginForm />
      </View>
    )
  }

}
