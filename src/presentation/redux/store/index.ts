import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {composeWithDevTools} from '@redux-devtools/extension';

const middleware = composeWithDevTools(applyMiddleware(promise, thunk));
export default createStore(combineReducers({...reducers}), middleware);
