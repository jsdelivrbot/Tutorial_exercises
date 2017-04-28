import React from 'react';
import {View, Text, AppRegistry } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/MusicList';
import BottomBar from './src/components/BottomBar';

const App = () => {
	return(
		<View style={{flex:1}}>
			<Header title={'Dashboard'}/>
			<AlbumList />
		</View>
	)
}

export default App;
