const express = require("express")
const mainRoutes = express()
const bookRoutes = require("./Book")

mainRoutes.use("/book", bookRoutes)

module.exports = mainRoutes