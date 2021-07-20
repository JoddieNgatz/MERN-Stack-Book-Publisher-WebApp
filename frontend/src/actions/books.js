//https://stackoverflow.com/questions/43831494/when-why-and-how-to-use-action-creators-in-redux
import {
    CREATE_BOOK,
    RETRIEVE_BOOKS,
    UPDATE_BOOK,
    DELETE_ALL_BOOKS,
    DELETE_BOOK,
} from "../actions/actions";

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
        const res = await BookService.getAllBooks();

        dispatch({
            type: RETRIEVE_BOOKS,
            payload: res.data,
        });
       // return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error);
    }
};

export const updateBooks = ( id, bookdata) => async (dispatch) => {
    try {
        const res = await BookService.update({id, bookdata});

        dispatch({
            type: UPDATE_BOOK,
            payload: res.data, //data
        });
       // return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error);
    }
};



export const deleteAllBooks = ( ) => async (dispatch) => {
    try {
        const res = await BookService.deleteAll();

        dispatch({
            type: DELETE_ALL_BOOKS,
            payload: res.data,
        });
        return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error);
    }
};


export const deleteBook = (id ) => async (dispatch) => {
    try {
       await BookService.delete(id);

        dispatch({
            type: DELETE_BOOK,
            payload: {id},
        });
       // return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error);
    }
};


export const findBooks = (title ) => async (dispatch) => {
    try {
        const res = await BookService.find(title);

        dispatch({
            type: RETRIEVE_BOOKS,
            payload: res.data,
        });
       // return Promise.resolve(res.data);

    } catch (error) {
        return Promise.reject(error);
    }
};