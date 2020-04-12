import { createStore, combineReducers } from 'redux';
import { visibilityFilter } from './reducers/VisibilityFilters.js';

export const store = createStore(combineReducers({
  visibilityFilter
}));
