import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {ISearchWeatherVM} from '@presentation/vm/SearchWeather';
import Icon from 'react-native-vector-icons/AntDesign';
import {mainTheme} from '../../constants/theme';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';
import {wp} from '../../constants/ResponsiveLayout';
import {styles} from './SearchItem.style';

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
      style={styles(theme).itemWrapper}
      className={'flex-row items-center gap-1' + borderClass}>
      <Icon
        name="enviromento"
        size={wp(20)}
        color={mainTheme(theme).Theme1.color}
      />
      <TextComponent
        themeInput={theme}
        variant={'primary1'}
        size={'h4'}
        text={`${loc?.name}, ${loc?.country}`}
      />
    </TouchableOpacity>
  );
}

export default memo(SearchItem);
