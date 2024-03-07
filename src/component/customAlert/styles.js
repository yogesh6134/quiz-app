import {StyleSheet} from 'react-native';
import { COLORS } from '../../utils/Colors';

export default StyleSheet.create({
  loadingModal: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    zIndex: 9,
    overflow: 'hidden',
    alignItems: 'center'
  },
  infoIcon: {
    height: 20,
    width: 20,
    tintColor: COLORS.SteelBlue,
  },
  heading: {
    fontSize: 22,
    color: COLORS.black,
    marginVertical: 10
  },
  button: {
    width: '25%',
    backgroundColor: COLORS.SteelBlue,
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
  }
});