import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {ISearchWeatherVM} from '@presentation/vm/SearchWeather';
import Icon from 'react-native-vector-icons/AntDesign';
import {mainTheme} from '../../constants/theme';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';

interface ISearchItem {
  theme: string;
  showBorder: boolean;
  loc: ISearchWeatherVM;
  handleLocation: (location: ISearchWeatherVM) => void;
}

function SearchItem({
  showBorder,
  theme,
  loc,
  handleLocation,
}: Readonly<ISearchItem>) {
  console.log('render SearchItem Molecule');
  let borderClass = showBorder ? ' border-b-2 border-b-gray-400' : '';
  return (
    <TouchableOpacity
      onPress={() => handleLocation(loc)}
      className={'flex-row items-center border-0 p-3 px-4 mb-1 ' + borderClass}>
      <Icon
        name="enviromento"
        size={20}
        color={mainTheme(theme).Theme1.color}
      />
      <TextComponent
        themeInput={theme}
        variant={'primary1'}
        size={'h4'}
        text={`${loc?.name}, ${loc?.country}`}
        className="ml-2"
      />
    </TouchableOpacity>
  );
}

export default memo(SearchItem);
