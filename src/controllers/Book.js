const BookModel = require("../../BookSchema")
const axios = require("axios")


const store = async (request, response) => {
  const { title, company, image, authors} = request.body
  const book = await BookModel.create({
    title, 
    company, 
    image, 
    authors
  })

  return response.status(201).json(book)
}

const deleted = async (request, response) => {
  const { book_id } = request.params

  const deleteBook = await BookModel.findByIdAndDelete(book_id)
  return response.status(200).json(deleteBook)
}

module.exports = {
  store,
  deleted,
}