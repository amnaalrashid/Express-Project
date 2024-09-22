const { response } = require("express");
const Book = require("../../models/BooksSchema");

const getALLBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ data: books });
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }

    const newBook = await Book.create(req.body);
    return res.status(201).json({ data: newBook });
  } catch (error) {
    next(error);
  }
};

const getOneBook = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const foundBook = await Book.findById(id);
    return res.status(200).json(foundBook);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Deleted successfully", data: deletedBook });
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedbook = await Book.findByIdAndUpdate(id, req.body);
    return res
      .status(200)
      .json({ message: "Updated successfully", data: updatedbook });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getALLBooks,
  createBook,
  getOneBook,
  deleteBook,
  updateBook,
};
