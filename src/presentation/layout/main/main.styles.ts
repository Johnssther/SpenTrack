import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../../application/utils/common.utils";
import { COLORS } from "../../../application/constants/colors.constanst";

const styles = StyleSheet.create({
  parent: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: COLORS.white,
    padding: 5,
    paddingHorizontal: 15,
    paddingTop: 15,
    flexDirection: 'column',
    gap: 8,
  },
  container: {
    height: '100%',
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
})

export default styles;
 