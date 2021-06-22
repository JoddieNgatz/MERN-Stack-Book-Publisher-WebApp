
module.exports = mongoose => {
    //Models are created from schemas using the mongoose.model() method:
    const Book = mongoose.model('Book',//name of collection books
        mongoose.schema({
            title: String,
            description: String,
            author: String,
            publisher: String
        }, { timestamps: true }));
    
    schema.method('toJSON', () => {
        const { _v, _id, ...object } = this.Object();
        object.id = _id;
        return object;
    });

    
    return Book;
};