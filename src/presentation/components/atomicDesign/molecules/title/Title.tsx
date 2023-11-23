import React from 'react';
// import {TextPokemonRN} from '../../atoms/text/textComponent';
import {styles} from './Title.style';
import {TextComponent} from '../../atoms/text/textComponent';

interface IPokemonTitle {
  isGreen: boolean;
  nameSelected: string;
  setIsGreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Title = ({isGreen, nameSelected, setIsGreen}: IPokemonTitle) => {
  console.log('render pokemon title');
  return (
    <TextComponent
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.title, {color: isGreen ? '#16c784' : 'white'}]}
      text={nameSelected}
      variant="primary1"
      size="h1"
      onPress={() => setIsGreen(!isGreen)}
    />
  );
};

export default Title;
