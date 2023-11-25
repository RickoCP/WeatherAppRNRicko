import React, {memo} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './SearchBar.style';
import {mainTheme} from '../../constants/theme';

interface ISearchBar {
  theme: string;
  showSearch: boolean;
  toggleSearch: (showSearch: boolean) => void;
  handleTextDebounce: (territory: string) => void;
}

function SearchBar({
  theme,
  showSearch,
  toggleSearch,
  handleTextDebounce,
}: Readonly<ISearchBar>) {
  console.log('render SearchBar Molecule');

  return (
    <View
      className="flex-row justify-end items-center rounded-full"
      style={
        showSearch
          ? styles(theme).showSearchWrapper
          : styles(theme).hideSearchWrapper
      }>
      {showSearch ? (
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search city"
          placeholderTextColor={'lightgray'}
          className="pl-6 h-10 pb-1 flex-1"
          style={styles(theme).text}
        />
      ) : null}
      <TouchableOpacity
        onPress={() => toggleSearch(!showSearch)}
        className="rounded-full p-3 m-1"
        style={styles(theme).iconSearchWrapper}>
        {showSearch ? (
          <Icon name="close" size={25} color={mainTheme(theme).text.color} />
        ) : (
          <Icon name="search1" size={25} color={mainTheme(theme).text.color} />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default memo(SearchBar);
