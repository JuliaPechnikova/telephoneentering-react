import {combineReducers} from 'redux';
import {phoneListReducer} from './phoneListReducer';

export const rootReducer = combineReducers({
  phoneNumbers: phoneListReducer
});