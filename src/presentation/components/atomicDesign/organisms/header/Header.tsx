import React, {memo} from 'react';
import {View} from 'react-native';
import useHeader from './Header.hook';
import {styles} from './Header.style';
import {ButtonComponent} from '../../atoms/button/buttonComponent';
import {TextComponent} from '../../atoms/text/textComponent';
interface IHeader {
  theme: string;
}

function Header({theme}: Readonly<IHeader>) {
  const {handleClickLogout} = useHeader();
  console.log('render Header');

  return (
    <View style={styles.headerView}>
      <View style={styles.title}>
        <TextComponent
          themeInput={theme}
          variant={'primary1'}
          size={'h1'}
          text={'Weather App'}
        />
      </View>

      <ButtonComponent
        themeInput={theme}
        onClick={handleClickLogout}
        variant={'primary1'}
        size={'default'}
        style={styles.logoutBtn}>
        <TextComponent text={'Logout'} variant="primary1" size="h3" />
      </ButtonComponent>
    </View>
  );
}

export default memo(Header);
// export default Header;
