const multer = require("multer");
let fileExtension = require("file-extension");

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname + fileExtension(file.mimetype));
  }
});

module.exports = storage;
