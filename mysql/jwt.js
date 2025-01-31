var express = require("express");

// var connect = require("./index.js");
var connection = require("./jwtindex");
var jsonwebtoken = require("jsonwebtoken");

const crypto = require("crypto");
const { log } = require("console");

var seckey = "abcgdeghijklmnopqrst0123456789";

var cors=require("cors")
// app.use(cors())

var app = express();

app.use(express.json());

function hello(req, res, next) {
  var token = req.headers["authorization"]?.split(" ")[1];

  console.log(token);

  if (!token) {
    res.send("needed token");
  } else {
    var val = jsonwebtoken.verify(token, seckey);

    req.data = val;

    next();
  }


}

app.post("/register", (req, res) => {
  var { username, password, email, role } = req.body;

  connect.query(
    "select * from users1 where username = ? ",
    [username],
    (err, data) => {
      if (data.length > 0) {
        res.send({
          msg: username + " user already exists",
        });
      } else {
        var query = `INSERT INTO emp (username, password, email, role) VALUES (?,?,?,?)`;
        connect.query(query, [username, password, email, role], (err, data) => {
          if (err) {
            res.send(err.message);
          } else {
            res.send({ msg: "reg successful", data });
          }
        });
      }
    }
  );

  // res.send(req.body)
});

app.post("/loginreqq", (req, res) => {
  connect.query(
    "select * from users1 where username= ?",
    [req.body.username],
    (err, data) => {
      if (err) {
        res.send(err.message);
      } else {
        if (data.length > 0) {
          var passcheck = req.body.username == data[0].username;

          var passwordcheck = req.body.password == data[0].password;

          if (passcheck && passwordcheck) {
            var token = jsonwebtoken.sign({ id: data[0].id }, seckey);

            res.send({
              data: "login successful",
              token: token,
            });
          } else {
            res.send({
              data: "incorrect cred",
            });
          }
        } else {
          res.send({
            mag: "please register and come ",
          });
        }
      }
    }
  );
});

// "content type"

app.get("/products", hello, (req, res) => {
  console.log(req.data.id);

  connect.query("select * from users1 where id=?", [req.data.id], (err, data) => {
    if (err) {
      res.send({
        msg: err.message,
      });
    } else {
      if (data[0].role == "admin") {
        connect.query("select * from users1", (err, data) => {
          if (err) {
            res.send({
              msg: err.message,
            });
          } else {
            res.send({
              msg: data,
            });
          }
        });
      } else {
        res.send("unauthorised");
      }
    }
  });

  //   res.send("hi this is root api");
});


app.get("/usersdata", hello, (req, res) => {
    console.log(req.data.id);
  
    connect.query("select * from users1 where id=?", [req.data.id], (err, data) => {
      if (err) {
        res.send({
          msg: err.message,
        });
      } else {
        if (data[0].role == "admin") {
          connect.query("select * from buynow", (err, data) => {
            if (err) {
              res.send({
                msg: err.message,
              });
            } else {
              res.send({
                msg: data,
              });
            }
          });
        } else {
          res.send("unauthorised");
        }
      }
    });
});

app.listen(4007, () => {
  console.log("hi server http://localhost:4007");
});