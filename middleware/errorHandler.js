const errorHandler = (error, request, responce, next) => {
  try {
    return responce
      .status(error.status || 500)
      .json({ error: error || "Internet Server error" });
  } catch (error) {
    next(error);
  }
};

module.exports = errorHandler;
