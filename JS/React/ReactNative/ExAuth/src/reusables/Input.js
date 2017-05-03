import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  const { viewContainer, labelStyle, input } = styles;
  return(
    <View style={viewContainer}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={input}
      />
    </View>
  )
}

export { Input };


// label and input given flex to give input 2/3 of space
// and label to recieve the other 1/3
const styles = {
  viewContainer: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20,
    width: 100
  }
}
