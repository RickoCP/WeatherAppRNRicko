import React, {memo} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {ISearchWeatherVM} from '@presentation/vm/SearchWeather';
import {theme1} from '@presentation/components/atomicDesign/constants/theme';
import Icon from 'react-native-vector-icons/AntDesign';

interface ISearchSection {
  theme: string;
  showSearch: boolean;
  toggleSearch: (showSearch: boolean) => void;
  handleTextDebounce: (territory: string) => void;
  locations: ISearchWeatherVM[];
  handleLocation: (location: ISearchWeatherVM) => void;
}

function SearchSection({
  showSearch,
  toggleSearch,
  handleTextDebounce,
  locations,
  handleLocation,
}: ISearchSection) {
  console.log('render Search Section');
  // console.log('locations: ', locations);

  return (
    <View style={{height: '7%'}} className="mx-4 relative z-50">
      <View
        className="flex-row justify-end items-center rounded-full"
        style={{
          backgroundColor: showSearch ? theme1.bgWhite(0.2) : 'transparent',
        }}>
        {showSearch ? (
          <TextInput
            onChangeText={handleTextDebounce}
            placeholder="Search city"
            placeholderTextColor={'lightgray'}
            className="pl-6 h-10 pb-1 flex-1 text-base text-white"
          />
        ) : null}
        <TouchableOpacity
          onPress={() => toggleSearch(!showSearch)}
          className="rounded-full p-3 m-1"
          style={{backgroundColor: theme1.bgWhite(0.3)}}>
          {showSearch ? (
            <Icon name="close" size={25} color="white" />
          ) : (
            <Icon name="search1" size={25} color="white" />
          )}
        </TouchableOpacity>
      </View>
      {locations.length > 0 && showSearch ? (
        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
          {locations.map((loc, index) => {
            let showBorder = index + 1 != locations.length;
            let borderClass = showBorder ? ' border-b-2 border-b-gray-400' : '';
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleLocation(loc)}
                className={
                  'flex-row items-center border-0 p-3 px-4 mb-1 ' + borderClass
                }>
                <Icon name="enviromento" size={20} color="gray" />
                <Text className="text-black text-lg ml-2">
                  {loc?.name}, {loc?.country}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const equal = (
  prev: {
    locations: ISearchWeatherVM[];
  },
  next: {
    locations: ISearchWeatherVM[];
  },
) => prev.locations === next.locations;

export default memo(SearchSection, equal);
