import React from 'react';
import {View, Text, AppRegistry } from 'react-native';

import Header from './src/components/header';

const App = () => {
	return(
		<View>
			<Header/>
			<Text> Basic body </Text>
		</View>
	)
}

AppRegistry.registerComponent('AlbumFinder', () => App);
