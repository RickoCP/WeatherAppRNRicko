import {StyleSheet} from 'react-native';
import {theme1} from '../../constants/theme';

export const styles = StyleSheet.create({
  boardSection: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  boardSectionBerry: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FFFFFF99',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    // marginVertical: 5,
    marginHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '700',
    // marginVertical: 5,
    marginHorizontal: 5,
    color: 'black',
  },
  setButtonError: {
    margin: 20,
    height: 50,
  },
  addPostArea: {
    marginTop: 10,
    width: '100%',
    height: 45,
  },
  removePokemonButton: {
    marginTop: 10,
    width: '80%',
    height: 45,
  },
  pokemonImage: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: theme1.backgroundColor1,
    margin: 8,
    padding: 5,
    backgroundColor: '#FFFFFF99',
    borderRadius: 100,
  },
  flatListItem: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: theme1.backgroundColor1,
    margin: 2,
  },
  borderListArea: {
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    height: 100,
    padding: 5,
    borderRadius: 5,
    // flex: 1
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  beryImageItem: {
    width: '100%',
    height: '100%',
    borderColor: theme1.backgroundColor1,
    resizeMode: 'contain',
  },
  containerDetail: {
    flex: 1,
    flexDirection: 'row',
    padding: 30,
    backgroundColor: '#FFFFFF99',
    borderRadius: 15,
  },
});
