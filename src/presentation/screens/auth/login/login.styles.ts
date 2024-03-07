import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    width: '100%',
    position: 'relative'
  },
  group_input: {
    width: 50,
  },
  group_button: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'red'
  },
  error: {
    color: 'red',
    width: '100%',
    fontWeight: 'bold',
  }
})

export default styles;
 