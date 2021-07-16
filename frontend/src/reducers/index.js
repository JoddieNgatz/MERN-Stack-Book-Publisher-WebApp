//combining reducers
import { combineReducers } from 'redux';
import books from './books';

export default combineReducers({
    books,
});

//only have a single store in redux we use reducer composition