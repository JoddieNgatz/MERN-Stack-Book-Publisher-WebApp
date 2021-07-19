//combining reducers
import { combineReducers } from 'redux';
import books from './books';

export default combineReducers({
    books,
   // auth
});
//https://medium.com/@mange_vibration/reducer-composition-with-higher-order-reducers-35c3977ed08f
//only have a single store in redux we use reducer composition instead of many stores to split data handling logic