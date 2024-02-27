import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../../../application/utils/common.utils";

const styles = StyleSheet.create({
  profile: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor:'white',
    borderRadius: 10,
    height: SCREEN_HEIGHT,
  },
  text: {
    fontSize: 22,
    textAlign: 'justify',
    width: '100%',
    marginTop: 7,
  }
})

export default styles;
