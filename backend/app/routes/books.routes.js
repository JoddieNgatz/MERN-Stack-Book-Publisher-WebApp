module.exports = app => {
    app.use('/api/books', router);
    
    const router = express.Router();
    //Create new book
    router.post('/', (books.create));

       //find/retireve a book
    router.get('/id', (books.findOne));
    
       //find/retireve all book
    router.get('/', (books.findAll));
    
       //find published book
    router.get('/published', (books.findAllPublished));
    
       //update book
    router.put('/:id', (books.update));
    
       //Create new book
    router.delete('/:id', (books.delete));

       //Create new book
    router.post('/', (books.deleteAll));

     
 
    
}