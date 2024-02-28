import { StyleSheet } from "react-native";
import { COLORS } from "../../../../application/constants/colors.constanst";

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 19,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    color: COLORS.slate[400],
    maxWidth: '75%',
    marginVertical: 10
  },
})

export default styles;