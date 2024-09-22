const { Schema, model } = require("mongoose");
const BooksScheme = new Schema({
  title: { type: String },
  author: { type: String },
  price: { type: Number },
  image: { type: String },
});

const book = model("Books", BooksScheme);

module.exports = book;
