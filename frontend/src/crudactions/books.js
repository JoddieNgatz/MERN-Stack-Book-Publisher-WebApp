//https://stackoverflow.com/questions/43831494/when-why-and-how-to-use-action-creators-in-redux
import {
    CREATE_BOOK,
    RETRIEVE_BOOKS,
    UPDATE_BOOK,
    DELETE_ALL_BOOKS,
    DELETE_BOOK
} from "./actions";

import BookService from "../services/book.service";

export const createBook = ( title, description ) => async (dispatch) => {
    try {
        const res = await BookService.create({ title, description });

        dispatch({
            type: CREATE_BOOK,
            payload: res.data,
        });
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error);
    }
};


export const retrieveBooks = ( ) => async (dispatch) => {
    try {
        const res = await BookService.getAll();

        dispatch({
            type: RETRIEVE_BOOKS,
            payload: res.data,
        });
       // return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error);
    }
};