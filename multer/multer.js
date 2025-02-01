//
var express = require("express");
var multer = require("multer");
var app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(__dirname);
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, __dirname + "./multer.js"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },});
var upload = multer({ storage: storage });
app.post("/reg", upload.single("file"), (req, res) => {
  try {
    console.log(req.file);
    res.status(200).send({
      message: "File uploaded successfully!",
      file: req.file, });
  } catch (error) {
    res.status(500).send({
      message: "An error occurred during the upload.",
      error: error.message, });
  } });
var PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);  });
