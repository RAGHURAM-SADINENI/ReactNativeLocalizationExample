import { combineReducers } from 'redux';
import languageReducer from './language/LanguageReducer';

const rootReducer = combineReducers({
    language: languageReducer
})

export default rootReducer;