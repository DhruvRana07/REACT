import { createStore, combineReducers } from 'redux';
import themeReducer from './themeReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    counter: counterReducer,
});

const store = createStore(rootReducer);

export { store };
