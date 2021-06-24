const express = require('express');
//var bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

//connect method to db
const db = require('./app/models');
db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log('connected to database'); }).catch(err => { console.log('problem connecting to db', err); process.exit; });


app.use(express.json());//express.json middleware to convert every request to json
//parse requests of content-type json '- json to be used'

const Port = process.env.PORT || 8080;//process.env.PORT || 8080 means: whatever is in the environment variable PORT, or 8080 if there's nothing there.


// Restricting allowed hosts
// https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
var corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOptions));
//app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));//basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).

require('./app/routes/books.routes')(app);

app.listen(Port, () => {
    console.log(`Server started on port: {$Port}`+Port);
});


app.get('/', (req, res) => {
    res.json({message:'Test landing endpoint for book publisher app'});
    
});



// app.post('/book/:id', (req, res) => {
//     const { id } = req.params;
//     const { title } = req.body;

// });

// app.get('/books', (req, res) => {
//     res.status(200).send({ 
//     });
// })
