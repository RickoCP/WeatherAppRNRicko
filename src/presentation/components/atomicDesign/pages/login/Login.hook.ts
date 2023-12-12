/* eslint-disable @typescript-eslint/no-unused-vars */
import {useDispatch} from 'react-redux';
import di from '@core/di';

export function useLogin() {
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
  return {
    handleClickLogin,
  };
}
