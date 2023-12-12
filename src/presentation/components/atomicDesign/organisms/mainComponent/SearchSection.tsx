import React, {memo} from 'react';
import {View} from 'react-native';
import {ISearchWeatherVM} from '@presentation/vm/SearchWeather';
import {styles} from './MainComponent.style';
import SearchBar from '../../molecules/searchBar/SearchBar';
import SearchItem from '../../molecules/searchItem/SearchItem';

interface ISearchSection {
  theme: string;
  showSearch: boolean;
  toggleSearch: (showSearch: boolean) => void;
  handleTextDebounce: (territory: string) => void;
  locations: ISearchWeatherVM[];
  handleLocation: (location: ISearchWeatherVM) => void;
}

function SearchSection({
  theme,
  showSearch,
  toggleSearch,
  handleTextDebounce,
  locations,
  handleLocation,
}: Readonly<ISearchSection>) {
  console.log('render Search Section');

  return (
    <View style={styles().searchWrapper} className="relative z-50">
      <SearchBar
        theme={theme}
        showSearch={showSearch}
        toggleSearch={toggleSearch}
        handleTextDebounce={handleTextDebounce}
      />

      {locations.length > 0 && showSearch ? (
        <View className="absolute w-full bg-gray-300 top-16 rounded-xl ">
          {locations.map((loc, index) => {
            let showBorder = index + 1 !== locations.length;
            return (
              <SearchItem
                key={loc.id}
                showBorder={showBorder}
                theme={theme}
                loc={loc}
                handleLocation={handleLocation}
              />
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
