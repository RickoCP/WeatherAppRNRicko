import {
  ILoginAction,
  ISessionActions,
} from '@presentation/presenters/action-interfaces/iSession';
import {LOGIN} from '../interfaces/iSession';

class SessionActions implements ISessionActions {
  setToken(token: string): ILoginAction {
    return {
      type: LOGIN,
      payload: {
        token,
      },
    };
  }
}

export default SessionActions;
