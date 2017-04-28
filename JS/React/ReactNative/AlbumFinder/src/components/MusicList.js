/**
*
* @class: Album controller and main injection point of album data
*
*/

import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

import { API_URL } from '../../config';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {

	constructor(props){
		super(props);
		this.state = { albums: [], error: false };
	}

  //Call component methods on initial load
	componentWillMount(){
		this._fetchData();
	}

	//HTTP request to external API to
	//retreive data list
	_fetchData(){
		axios.get(API_URL)
		     .then((response) => {
					 this.setState({ albums: response.data })
         }).catch((error) => this.setState({ error: error }));
	}

  //Return Album component from orignal object of
  //albums
  _iterateAlbums(){
    return this.state.albums.map((album) => {
      return (
        <AlbumDetail key={album.title} album={album} />
      )
    })
  }

	render(){

    //Display error in event of API call failure
    if(this.state.error){
			console.log(this.state.error)
      return(
        <Text>Error loading </Text>
      )
    }
    //Render list objects from API
    else{
      return(
        <ScrollView>
          {this._iterateAlbums()}
        </ScrollView>
      )
    }

  }//end of render
}//EOC
