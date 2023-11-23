import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },
  searchBar__unclicked: {
    padding: 2,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
  },
  searchBar__clicked: {
    padding: 2,
    flexDirection: 'row',
    width: '70%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: 10,
    borderWidth: 2,
  },
  input: {
    fontSize: 15,
    marginLeft: 20,
    width: '90%',
    color: 'black',
  },
  cancel: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 20,
  },
  cancelButton: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
