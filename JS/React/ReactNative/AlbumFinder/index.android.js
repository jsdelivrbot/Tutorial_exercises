import React from 'react';
import {View, Text, AppRegistry } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/MusicList';

const App = () => {
	return(
		<View>
			<Header title={'Dashboard'}/>
			<AlbumList />
		</View>
	)
}

AppRegistry.registerComponent('AlbumFinder', () => App);
