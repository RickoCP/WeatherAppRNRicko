/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useDispatch} from 'react-redux';
import AuthTemplate from '../../templates/authTemplate/AuthTemplate';
import LoginComponent from '../../organisms/loginComponent/LoginComponent';
import di from '@core/di';
import FastImage from 'react-native-fast-image';
import {images} from '../../constants';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleClickLogin = async ({
    userId,
    userPw,
  }: {
    userId: string;
    userPw: string;
  }) => {
    // dispatch(await di.session.login(userId, userPw))
    dispatch(await di.session.login('kminchelle', '0lelplR'));
  };

  return (
    <AuthTemplate>
      <LoginComponent
        handleClickLogin={({
          userId,
          userPw,
        }: {
          userId: string;
          userPw: string;
        }) => handleClickLogin({userId, userPw})}
      />
    </AuthTemplate>
  );
};

export default Login;
