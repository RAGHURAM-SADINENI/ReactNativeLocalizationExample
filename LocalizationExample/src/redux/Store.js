import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './CombineReducer';

const store=createStore(rootReducer,applyMiddleware(createLogger()));

export default store;