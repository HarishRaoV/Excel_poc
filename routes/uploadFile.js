const router = require("express").Router();
const multer = require("multer");

const UploadExcelFile = require("../controllers/uploadController");
const storage = require("../helpers/multer");

let uploader = multer({ storage });
router.post("/upload", uploader.single("file"), UploadExcelFile);

module.exports = router;
