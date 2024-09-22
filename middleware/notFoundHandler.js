const notfoundhandler = (request, responce, next) => {
  try {
    return responce.status(404).json({ error: "Path not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = notfoundhandler;
