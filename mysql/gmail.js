var express = require("express");
var nodemailer = require("nodemailer");
var app = express();
app.use(express.json());

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "katlasrujana1@gmail.com", 
    pass: "cvxb dgnv svun jnhj",         
  },
});
app.post("/reg", (req, res) => {
  if (!req.body.email) {
    res.status(400).send("User email is missing in the request body");
    return;
  }

  var options = {
    from: "katlasrujana1@gmail.com", 
    to: "srujanakatla06@gmail.com",                 
    subject: "Sending Email using Node.js",
    html: "<p>This mail is sent by katla</p>", 
    attachments: [
      {
        filename: "srujana.txt",
        path: "./mail.txt", 
      },
    ],
  };

  // Send the email
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.error("Error:", err.message);
      res.status(500).send({ error: "Failed to send email", message: err.message });
    } else {
      console.log("Email sent successfully:", info.response);
      res.status(200).send({ success: "Email sent successfully", info: info.response });
    }
  });
});

// Start the server
app.listen(3007, () => {
  console.log(`Server is running http://localhost:${3007}`);
});






















// var express = require("express");
// var nodemailer = require("nodemailer");
// var app = express();
// app.use(express.json());

// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "bhargaviidaggubati@gmail.com",
//     pass: "pqje pbah oqzf vnyb",
//   },
// });
// // var options={
// // from:'bhargaviidaggubati@gmail.com',
// // to:'thrivenireddy1212@gmail.com',
// // subject:'sending email using node.js',
// // html:'this mail is send by bhargavi',
// // attachments:[{
// // filename:"bhargavi.txt",
// // path:"./mail.txt"
// // }]
// // }
// // transporter.sendMail(options,(err,info)=>{
// //     if(err) console.log(err);
// //     else console.log(info);

// // })
// app.post("/reg", (req, res) => {
//     console.log("Request Body:", req.body);  // Log the request body to see what's coming in

//   if (!req.body.user) {
//     res.status(400).send("User field is missing in the request body");
//     return;
//   }
//   var options = {
//     from: "bhargaviidaggubati@gmail.com",
//     to: ${req.body.user},
//     subject: "sending email using node.js",
//     html: "this mail is send by bhargavi",
//     attachments: [
//       {
//         filename: "bhargavi.txt",
//         path: "./mail.txt",
//       },
//     ],
//   };
//   transporter.sendMail(options, (err, info) => {
//     if (err) {
//       console.log(err.message);
//       res.send(err.message);
//     } else {
//       console.log(info.message);
//       res.send(info.message);
//     }
//   });
//   // res.send(req.body)
// });
// app.listen(3007, () => {
//   console.log("hi this is port");
// });