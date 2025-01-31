let express = require("express");
let bcrypt = require("bcrypt");
let connection = require("./index");
let app = express();
app.post("/user", (req, res) => {
    const salt = 10;
    bcrypt.hash(req.query.password, salt, (err, hash) => {
        if (err) {
            return res.send({
                statuscode: 500,
                error: err.message,
                res: "Error hashing password",
            });
        }
        var id = req.query.deptno ? Number(req.query.deptno) : 0;
        var user_name = req.query.dname ? req.query.dname : "";
        var dob = req.query.loc ? req.query.loc : "";
        const query = `insert into dept (deptno, dname, loc) values (?, ?, ?, ?)`;
        connection.query(query, [deptno, dname, loc], (err, data) => {
            if (err) {
                res.send({
                    statuscode: 400,
                    error: err.message,
                    res: "Incorrect query",
                });
            } else {
                res.send({
                    statuscode: 200,
                    res: "User added ",
                    data: data,
                });
            }
        });
    });
});
app.listen(3001, () => {
    console.log("The server is running http://localhost:3001");
});








// //
// var express = require("express");
// var connection = require("./index.js"); 
// var app = express();

// app.use(express.json()); 

// app.get("/users/:id", (req, res) => {
//   const userId = req.params.id;

//   connection.query("SELECT * FROM users WHERE id = ?", [userId], (err, data) => {
//     if (err) {
//       res.status(400).send({
//         msg: "Error fetching user",
//         error: err.message,
//         statusCode: 400,
//       });
//     } else {
//       if (data.length === 0) {
//         res.status(404).send({
//           msg: "User not found",
//           statusCode: 404,
//         });
//       } else {
//         res.status(200).send({
//           msg: "User data retrieved successfully",
//           data: data[0],
//           statusCode: 200,
//         });
//       }
//     }
//   });
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });





// // var express = require("express")
// // var connection = require("./index")
// // var app = express()
// // app.get("/users/:id",(req,res)=>{
// //     console.log(req.params.id);
// //     connection.query(`select * from users where id = ${req.params.id}`,(err,data)=>{
// //         if(err){
// //             res.send({
// //                 msg:err,message,
// //                 statuscode:400
// //             })
// //         }
// //         else{
// //             res.send({

// //             })
// //         }
// //     })
    
// // })