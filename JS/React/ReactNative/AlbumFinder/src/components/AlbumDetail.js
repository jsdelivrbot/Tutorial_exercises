/**
*
* @function: Top level container/component for each indivual album
*
*/

import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

//Component imports
import Card from './reusable/Card'
import CardSection from './reusable/CardSection';
import Button from './reusable/Button';

const AlbumDetail = (props) => {
  const { album } = props
  return(
    <Card>

      {/* Album header (thumb and artist/song detil) */}
      <CardSection>

        <View style={styles.albumHeader_container_image}>
          <Image
            style={styles.albumHeader_image}
            source={{uri: album.thumbnail_image}}/>
        </View>

        <View style={styles.albumHeader_text}>
          <Text style={styles.albumHeader_text_title}> {album.title} </Text>
          <Text> {album.artist} </Text>
        </View>

      </CardSection>

      {/* Main album image */}
      <CardSection>
        <Image
          style={styles.albumBody_image}
          source={{uri: album.image}}/>
      </CardSection>

      {/* Purchase */}
      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}> View site </Button>
      </CardSection>

    </Card>
  )
}

const styles = {

  // Header styling
  albumHeader_container_image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  albumHeader_image: {
    height: 50,
    width: 50
  },
  albumHeader_text: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumHeader_text_title: {
    fontSize: 18
  },

  // Body styling
  albumBody_image: {
    height: 300,
    flex: 1,
    width: null
  }



  // Footer styling
}

export default AlbumDetail;
