const express = require("express");
const cors = require("cors");
const uploadFile = require("./routes/uploadFile");
const { PORT } = require("./config");
const { dbConnect } = require("./config/db.Connect");

const app = express();

const startServer = () => {
  try {
    dbConnect();
    // middlewares here
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    // Routes section
    app.get("/", (req, res) => {
      res.send("ok");
    });

    app.use("/file", uploadFile);
    app.use("*", (req, res) => {
      res.send("Enter valid api");
    });

    app.listen(PORT, err => {
      if (err) console.log(err);
      console.log("Server is running on Port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
