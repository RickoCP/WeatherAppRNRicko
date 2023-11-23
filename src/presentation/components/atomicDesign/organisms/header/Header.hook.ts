import di from '@core/di';
import {useDispatch} from 'react-redux';

const useHeader = () => {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(di.session.removeToken());
  };
  return {
    handleClickLogout,
  };
};

export default useHeader;
