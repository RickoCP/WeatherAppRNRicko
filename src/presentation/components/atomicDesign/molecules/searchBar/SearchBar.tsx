import React, {memo} from 'react';
import {TextInput, View, Keyboard, TouchableOpacity, Text} from 'react-native';
import {styles} from './SearchBar.style';
import {ButtonComponent} from '../../atoms/button/buttonComponent';
import {TextComponent} from '../../atoms/text/textComponent';

function SearchBar({clicked, searchPhrase, setSearchPhrase, setClicked}: any) {
  console.log('render SearchBar');
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <TouchableOpacity
            onPress={() => {
              setSearchPhrase('');
            }}>
            <Text style={styles.cancel}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      {clicked && (
        <View style={styles.cancelButton}>
          <ButtonComponent
            onClick={() => {
              Keyboard.dismiss();
              setClicked(false);
              setSearchPhrase('');
            }}
            variant={'primary3'}
            size={'default'}
            style={styles.cancelButton}>
            <TextComponent text="Cancel" variant="primary1" size="h3" />
          </ButtonComponent>
        </View>
      )}
    </View>
  );
}
export default memo(SearchBar);

// styles
