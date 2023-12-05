import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ISessionStateGroup} from '@presentation/redux/interfaces/iSession';
import di from '@core/di';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from './constants/ResponsiveLayout';

const useIndex = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state: ISessionStateGroup) => state.session.token);

  useEffect(() => {
    (async () => {
      const storageToken = await di.session.getToken();
      if (storageToken) {
        dispatch(di.session.setToken(storageToken));
      }
      setLoading(false);
      console.log('DEVICE_WIDTH: ', DEVICE_WIDTH);
      console.log('DEVICE_HEIGHT: ', DEVICE_HEIGHT);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    token,
  };
};

export default useIndex;
