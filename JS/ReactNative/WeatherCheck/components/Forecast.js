import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Forecast = (props) => {

    return(
      <View>
        <Text style={styles.bigText}>
          {props.main}
        </Text>
        <Text style={styles.mainText}>
          Current Conditions: {props.description}
        </Text>
         <Text style={styles.bigText}>
            {props.temp}F
        </Text>
      </View>
    )

}//end of function

export default Forecast;

const styles = StyleSheet.create({
  bigText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF'
  }
});
