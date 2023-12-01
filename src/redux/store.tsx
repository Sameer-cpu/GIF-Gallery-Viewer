import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import Home from './Home/homeReducer';

const rootReducer = combineReducers({
  Home,
});
export const configerStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer);

  return store;
};
const store = configerStore();
export default store;
