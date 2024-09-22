//import
const express = require("express");
const booksRouter = require("./api/books/books.route.js");
const connectDB = require("./database.js");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const notfoundhandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler.js");

//init
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Other middleware and configurations can be added here

//routes
app.use("/api", booksRouter);

//errorhandler
app.use(errorHandler);

//notfoundhandler
app.use(notfoundhandler);

// Start the Express app
app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
