import React from 'react';
import AuthTemplate from '../../templates/authTemplate/AuthTemplate';
import LoginComponent from '../../organisms/loginComponent/LoginComponent';
import {useLogin} from './Login.hook';

const Login: React.FC = () => {
  const {handleClickLogin} = useLogin();
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
