const xlsxtojson = require("xlsx-to-json");
const fs = require("fs");
const User = require("../helpers/upload.dto");

// POST Request
let excel2json;
const UploadExcelFile = (req, res) => {
  try {
    console.log(Date.now().toLocaleString());
    if (!req.file) {
      res.json({ error_code: 404, err_desc: "File not found!" });
      return;
    }

    if (
      req.file.originalname.split(".")[
        req.file.originalname.split(".").length - 1
      ] === "xlsx"
    ) {
      excel2json = xlsxtojson;
    } else {
      res.status(404).json({ message: "Only xlxs file are allowed" });
    }

    //  code to convert excel data to json  format
    excel2json(
      {
        input: req.file.path,
        output: "data.json", // output json
        lowerCaseHeaders: true
      },
      async function(err, result) {
        if (err) {
          return res.status(500).json({ message: "Internal Server Error" });
        } else {
          await User.bulkCreate(result);
          fs.unlink(req.file.path, function(err) {
            if (err) throw err;
            console.log("File deleted!");
            console.log(Date.now().toLocaleString());
          });
          return res.status(200).json({ message: "Data saved successfully" });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = UploadExcelFile;
