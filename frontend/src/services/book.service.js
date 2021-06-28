//service uses axios axiosInitialize.js to make api calls
import requests from "../axiosInitialize";

class BookService{
    getAllBooks() {
        return requests.get("/books");
    }
    
    getBook(id) {
        return requests.get(`/books/${id}`);
    }
    
    create(bookdata) {
        return requests.post("/books",bookdata);
    }
    
    update(id, bookdata) {
        return requests.put(`/books/${id}`, bookdata);
    }
    delete(id) {
        return requests.delete(`/books/${id}`);
    }
    deleteAll() {
        return requests.delete("/books/");
    }
    find(title) {
        return requests.get(`/books?title=${title}`);
}

}

export default new BookService();