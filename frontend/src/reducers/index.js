import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import search from './search';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  results: search,
});
