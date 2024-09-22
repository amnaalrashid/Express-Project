const express = require("express");
const booksRouter = express.Router();
const {
  getALLBooks,
  createBook,
  getOneBook,
  deleteBook,
  updateBook,
} = require("./books.controllers");
const upload = require("../../middleware/multer");

booksRouter.get("/books", getALLBooks);
booksRouter.post("/create", upload.single("image"), createBook);
booksRouter.get("/book/:id", getOneBook);
booksRouter.delete("/book/:id", deleteBook);
booksRouter.put("/book/:id", updateBook);

module.exports = booksRouter;
