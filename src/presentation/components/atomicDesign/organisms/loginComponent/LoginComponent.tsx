import Field from '@presentation/components/atomicDesign/molecules/field/Field';
import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from './LoginComponent.styles';
import {ButtonComponent} from '@presentation/components/atomicDesign/atoms/button/buttonComponent';
import {TextComponent} from '@presentation/components/atomicDesign/atoms/text/textComponent';

function LoginComponent({handleClickLogin}: any) {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleSubmit = () => {
    setUserId('');
    setUserPw('');
    handleClickLogin({userId, userPw});
  };

  const onChangeId = (text: React.SetStateAction<string>) => {
    setUserId(text);
  };

  const onChangeTPassword = (text: React.SetStateAction<string>) => {
    setUserPw(text);
  };

  return (
    <View style={styles.loginForm}>
      <Field
        label={'Username'}
        variant={'primary2'}
        size={'h3'}
        value={userId}
        onChangeText={onChangeId}
      />
      <Field
        label={'Password'}
        variant={'primary2'}
        size={'h3'}
        value={userPw}
        onChangeText={onChangeTPassword}
      />
      <ButtonComponent
        onClick={handleSubmit}
        variant={'primary3'}
        size={'default'}
        style={styles.loginView}>
        <TextComponent text={'Login'} variant="primary1" size="h3" />
      </ButtonComponent>
    </View>
  );
}

export default LoginComponent;
