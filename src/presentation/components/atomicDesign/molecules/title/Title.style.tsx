import {StyleSheet} from 'react-native';
import {theme1} from '../../constants/theme';

export const styles = StyleSheet.create({
  boardSection: {
    padding: 10,
    // flex: 1,
    flexGrow: 1,
  },
  title: {
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0)',
    // textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10,
  },
  footerText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    height: 100,
  },
  borderListArea: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    height: '85%',
  },
  setPokemonArea: {
    height: 50,
  },
  borderList: {
    borderTopWidth: 1,
    borderColor: '#dddddd',
    flex: 1,
    flexDirection: 'row',
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListItem: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: theme1.backgroundColor1,
    margin: 8,
    padding: 5,
  },
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
    backgroundColor: '#ecf0ee',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 2,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: 10,
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
