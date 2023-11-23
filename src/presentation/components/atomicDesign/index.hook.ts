import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ISessionStateGroup} from '@presentation/redux/interfaces/iSession';
import di from '@core/di';

const useIndex = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: ISessionStateGroup) => state.session.token);

  useEffect(() => {
    (async () => {
      const storageToken = await di.session.getToken();
      if (storageToken) {
        dispatch(di.session.setToken(storageToken));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    token,
  };
};

export default useIndex;
