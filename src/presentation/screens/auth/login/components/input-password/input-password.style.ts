import { StyleSheet } from "react-native";
const styles = StyleSheet.create({ 
  mainContainer: { 
      marginTop: 70, 
      margin: 40, 
  }, 
  container: { 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 8, 
      paddingHorizontal: 14, 
      marginLeft: 12,
  }, 
  input: { 
      flex: 1, 
  }, 
  icon: { 
      marginLeft: 10, 
  }, 
  heading: { 
      alignItems: 'center', 
      fontSize: 20, 
      color: 'green', 
      marginBottom: 20, 
  }, 
}); 

export default styles;
 