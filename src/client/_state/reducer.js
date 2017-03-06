import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

// Deps
import items from './items';

const rootReducer = combineReducers({
  items: items.reducer,
  routing,
})

export default rootReducer;
