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
  },
  text: {
    fontSize: 22,
    textAlign: 'justify',
    width: '100%',
    marginTop: 7,
  },
  container1: {
    height: '100%',
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  item1: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    justifyContent:'center',
    alignItems: 'center',
    gap: 10
  },
  item1Name: {
    width: '35%',
    fontSize: 18,
    color: 'gray'
  },
  item1Value: {
    width: '62%',
    fontSize: 18,
    color: 'black',
    flexDirection: 'row'
  },
})

export default styles;
