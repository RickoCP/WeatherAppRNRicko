import {
  ILoginAction,
  IToken,
} from '@presentation/presenters/action-interfaces/iSession';

export const LOGIN = 'LOGIN';

export interface ISessionStateGroup {
  session: IToken;
}

export type IReducer = (state: IToken, action: ILoginAction) => IToken;
