import {
    CREATE_BOOK,
    RETRIEVE_BOOKS,
    UPDATE_BOOK,
    DELETE_BOOK,
    DELETE_ALL_BOOKS
} from "../actions/actions";

const initialState = [];

function bookreducer(books = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // case AUTH:
            
        //     return [...books, payload];
        
        case CREATE_BOOK:
            
            return [...books, payload];
        case RETRIEVE_BOOKS:
            
            return payload;
        
        case UPDATE_BOOK:
            
            return books.map((book) => {
                if (book.id === payload.id) {
                    return { ...books, ...payload };
                } else {
                    return books;
                }
            });
        
        case DELETE_BOOK:
            
            return books.filter(({ id }) => id !== payload.id );
        
        
        case DELETE_ALL_BOOKS:
            
            return [];
        
        default:
            return books;
    }
}

export default bookreducer;