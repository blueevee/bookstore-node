const mongoose = require("mongoose")


const BookSchema = mongoose.Schema({

    title: String,
    company: String,
    image: String,
    authors: String
},{
    timestamp: true
})

const bookModel = mongoose.model("Book", BookSchema)


module.exports = bookModel