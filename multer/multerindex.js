//

var express = require("express");
var app = express();
var multer = require("multer");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(__dirname, "dirname");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/uploads");  
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log(__dirname, "multer");
//     cb(null, __dirname + "./multer.js");
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     cb(null, file.originalname);
//   },
// });
var upload = multer({ storage: storage });
app.post("/register", upload.array("aa", 3), (req, res) => {
  res.send({
    file: req.files,
    body: req.body,
  });   
});
app.listen(3009, () => console.log("server has been started"));
