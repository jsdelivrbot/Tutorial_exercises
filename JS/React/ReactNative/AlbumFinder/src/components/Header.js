/**
*
* @function: Application header
*
*/

import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {

	const { viewStyle, textStyle } = styles;
	const { title } = props;

	return(
		<View style={viewStyle}>
			<Text style={textStyle}>{props.title}</Text>
		</View>
	)
}

const styles = {
	viewStyle: {
		backgroundColor: '#56E39F',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2
	},
	textStyle: {
		fontSize: 20,
		color: '#FFF'
	}
}

export default Header;
