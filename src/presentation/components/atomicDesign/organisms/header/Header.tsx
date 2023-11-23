import React, {memo} from 'react';
import {View, Text} from 'react-native';
import useHeader from './Header.hook';
import {styles} from './Header.style';
import {ButtonComponent} from '../../atoms/button/buttonComponent';
import {TextComponent} from '../../atoms/text/textComponent';

const Header: React.FC = () => {
  const {handleClickLogout} = useHeader();
  console.log('render Header');

  return (
    <View style={styles.headerView}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Weather App</Text>
      </View>
      <ButtonComponent
        onClick={handleClickLogout}
        variant={'primary3'}
        size={'default'}
        style={styles.logoutBtn}>
        <TextComponent text={'Logout'} variant="primary1" size="h3" />
      </ButtonComponent>
    </View>
  );
};

export default memo(Header);
// export default Header;
