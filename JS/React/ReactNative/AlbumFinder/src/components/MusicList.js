import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import config from '../../config';

export default class AlbumList extends Component {

	constructor(props){
		super(props);
		this.state = { response: '' };
	}

	componetWillMount(){
		_fetchData();
	}

	//HTTP request to external API to
	//retreive data list
	_fetchData(){
		axios.get(config.API_URL)
		     .then((response) => this.setState({ response }) );
	}

	render(){
		return(
			<View>
				<Text> Music List </Text>
				<Text> {this.state.response} </Text>
			</View>
		)
	}
}
