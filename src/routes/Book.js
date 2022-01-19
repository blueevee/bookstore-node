const bookRoutes = require("express").Router()
const bookController = require("../controllers/Book")


userRoutes.post("/newBook", bookController.store)

userRoutes.delete("/deleteBook/:book_id", bookController.deleted)

module.exports = userRoutes