import { StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
  //Main container
  container: {
    flex: 1,
  },
  //Input container
  lcd: {
    flex: 2,
    backgroundColor: '#193441'
  },
  //Button container
  button: {
    flex: 8,
    backgroundColor: '#3E606F'
  },
  //Input Button
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  //Input button text
  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
  //Row of button
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
})
