module.exports = app => {
    //connect controller for books operations
    const books = require('../controller/books.controller.js')
    console.log('in routes')
    const router = require('express').Router();
    //Create new book
    router.post('/', (books.create));

       //find/retireve a book
    router.get('/id', (books.findOne));
    
       //find/retireve all book
    router.get('/', (books.findAll));
    
   //     //find published book
   //  router.get('/published', (books.findAllPublished));
    
       //update book
    router.put('/:id', (books.update));
    
       //Create new book
    router.delete('/:id', (books.delete));

       //Create new book
    router.post('/', (books.deleteAll));

     
    app.use('/api/books', router);
 
    
}