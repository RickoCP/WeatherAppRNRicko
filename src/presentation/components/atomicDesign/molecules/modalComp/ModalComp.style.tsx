import {StyleSheet} from 'react-native';
import {wp} from '../../constants/ResponsiveLayout';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(22),
  },
  modalView: {
    margin: wp(20),
    backgroundColor: 'white',
    borderRadius: wp(20),
    padding: wp(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: wp(0),
      height: wp(2),
    },
    shadowOpacity: wp(0.25),
    shadowRadius: wp(4),
    elevation: wp(5),
  },
  button: {
    borderRadius: wp(20),
    padding: wp(10),
    elevation: wp(2),
  },
  buttonOpen: {
    backgroundColor: COLORS.primary2_3,
  },
  buttonClose: {
    backgroundColor: COLORS.secondary2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: wp(15),
    textAlign: 'center',
    color: 'black',
  },
});
