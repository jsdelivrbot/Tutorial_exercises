/******************************************************************************
*  MAIN APPLICATION CONTAINER
*  --------------------------
* @description - Render main application to regist.
*
******************************************************************************/

import React, { Component } from 'react';
import { Drawer, View } from 'native-base';
import { StyleSheet, Navigator } from 'react-native';

import SideMenu from './SideMenu'
import SettingsStore from './stores/settingsStore';
import SplashScene from './scenes/SplashScene';
import theme from './theme/base-theme';

const settings = new SettingsStore();


export default class AppContainer extends Component {

  /**
  * @constructor : Set base state and bind this to
  * methods.
  */
  constructor(props){
    super(props);
    this.state = {
      store: {
        settings: settings
      },
      theme: theme,
      toggled: false
    }
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.configureScene = this.configureScene.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  /**
  * @method : Based on current drawer state. Open or close
  * side swipe drawer
  */
  toggleDrawer(){
    this.state.toggled ? this._drawer.close() : this._drawer.open();
  }

  openDrawer(){
    this.setState({ toggled: true });
  }

  closeDrawer(){
    this.setState({toggled: false});
  }

  renderScene(route,navigator){
    switch(route.title){
      case 'Splash': {
        return <SplashScene {...route.passProps} navigator={navigator}/>
      }
      default: { return null }
    }
  }

  configureScene(route,routeStack){
    return Navigator.SceneConfigs.PushFromRight;
  }

  render(){
    return(
      <Drawer
        ref={(ref) => { return this._drawer = ref }}
        type="displace"
        content={<SideMenu
          navigator={this._navigator}
          theme={this.state.theme}/>}
        onClose={this.closeDrawer}
        onOpen={this.openDrawer}
        openDrawerOffset={0.2} >
        <Navigator
          ref={(ref) => this._navigator = ref }
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            title: "Splash",
            passProps: {
              stores: this.state.store,
              toggleDrawer: this.toggleDrawer.bind(this),
              theme: this.state.theme
            }
          }}
        />
      </Drawer>
    )
  }

}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#000",
    height: 1000
  }
})
