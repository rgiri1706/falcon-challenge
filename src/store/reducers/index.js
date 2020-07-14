// Imports: Dependencies
import {combineReducers} from 'redux';
import planetListReducer from './planetListReducer.js';
// Imports: Reducers

// Redux: Root Reducer
const rootReducer = combineReducers({
    planets: planetListReducer
});
// Exports
export default rootReducer;
