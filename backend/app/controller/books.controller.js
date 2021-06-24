//const { request } = require('express');
//const { books } = require('../models');
const db = require('../models');
const Book = db.books;

//Create and Save new Book
exports.create = (req, res) => {
  
    const body_T = req.body.title;
    if (!body_T) {
        res.status(418).send({ message: 'Send Content' });
        return;
    }
    //create book
    const books = new Book({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
       // published: request.body.published
    });

    //save books
    books.save(books).then((data) => {
        res.send((data));
        
    }).catch((err) => {
        res.status(500).send({message: err+ 'Error Creating try again'});
    });
};

//Get/Retrieve one book by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Book.findById(id).then(data => {
        if (!data)
          res.status(404).send({ message: "Book not found with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: err+ "Error retrieving Book with id=" + id });
      });
};

//Get/Retrieve all books
exports.findAll = (req, res) => {
    const title = req.query.title; //get query string
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    const id = req.params.id;

    Book.find(condition).then(data => {
        if (!data)
          res.status(404).send({ message: "Book not found with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: err+ "Error retrieving Book with id=" + id });
      });
};


//Update book by id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
        const id = req.params.id;

    books.findById(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: "Cannot update book with id: " + id
            })
        }
        else res.send({ message: 'Book was updated sucessfully' });
    }).catch(err => {
        res.status(500).send({
            message: err+ "Error updating book with id:" + id 
        });
    });

};


//Delete book with specific id in request
exports.delete = (req, res) => {
    const id = req.params.id;
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    books.findByIdAndRemove(id).then(data => {
        if (!data) {
            res.status(404).send({
                message: "Cannot delete book with id: " + id
            })
        }
        else res.send({ message: 'Book was deleted sucessfully' });
    }).catch(err => {
        res.status(500).send({
            message: "Error delete book with id:" + id +err
        });
    });
};


//Delete all books from database
exports.deleteAll = (req, res) => {
    book.deleteAll({}).then(data => {
        res.send({ message: 'All Books deleted'+ data.deletedCount });
    }).catch(err => {
        res.status(500).send({
          message: 'Error not deleted'+err
      });
  })
};

// //Find all published books
// exports.findAllPublished = (req, res) => {
//     books.find({ published: true }).then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: 'error problem' + err
//         });
   
// });

// };