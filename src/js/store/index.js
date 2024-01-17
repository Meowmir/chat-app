import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ChatReducer from "../reducers/chats";
export default function configureStore() {

  const middlewares = [
    thunkMiddleware
  ];

  const store = createStore(
    combineReducers({
      chats: ChatReducer
    })
  , applyMiddleware(...middlewares));

  return store;
}
