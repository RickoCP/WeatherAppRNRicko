import {
  ILoginAction,
  IToken,
} from '@presentation/presenters/action-interfaces/iSession';
import {IReducer, LOGIN} from '../interfaces/iSession';

const initState: IToken = {
  token: '',
};

const session: IReducer = (state = initState, action: ILoginAction): IToken => {
  if (action.type === LOGIN) {
    return {
      token: action.payload.token,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default session;
