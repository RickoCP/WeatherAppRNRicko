import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },

  title: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    fontWeight: '700',
  },
  titleText: {
    fontSize: 20,
    color: 'black',
  },
  logoutBtn: {
    width: '30%',
    height: 50,
    justifyContent: 'center',
  },
});
