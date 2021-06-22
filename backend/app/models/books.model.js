//https://www.npmjs.com/package/mongoose
    
module.exports = mongoose => {
    //Models are created from schemas using the mongoose.model() method:
    const Schema = mongoose.Schema;

    var bookSchema = new Schema({
        title: String,
        description: String,
        author: String,
        publisher: Boolean
    }, { timestamps: true });
    
    const Book = mongoose.model('Book', bookSchema);//name of collection books
        // mongoose.schema({
        //     title: String,
        //     description: String,
        //     author: String,
        //     publisher: Boolean
        // }, { timestamps: true })
    
   
    
        bookSchema.method("toJSON", () => {
        const { _v, _id, ...object } = this.Object();
        object.id = _id;
        return object;
    });

    
    return Book;
};