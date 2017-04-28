import React from 'react';
import { View, Text } from 'react-native';

const BottomBar = () => {

  return(
    <View style={styles.footer_container}>
      <Text> Swifty </Text>
    </View>
  )

}

const styles = {

  footer_container: {
    height: 40,
    backgroundColor: '#56E39F'
  }

}

export default BottomBar;
