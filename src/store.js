import { createStore } from 'redux';
import { visibilityFilter } from './reducers/VisibilityFilters.js';

export const store = createStore(visibilityFilter);
