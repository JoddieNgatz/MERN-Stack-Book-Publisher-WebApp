const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const Port = 8080;
app.use(express.json());//express.json middleware to convert every request to json

app.listen(port, () => {
    console.log(`Server started on port: `+Port);
});

app.get('/books', (req, res) => {
    res.status(200).send({
        book: '',
        id: 123,
        title: 'Express'
    });
})

app.post('/book/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;



});