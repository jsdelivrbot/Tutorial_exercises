import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {
  return(
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={(onPress)}>
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#56E39F',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default Button;
