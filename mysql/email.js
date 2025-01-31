const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "katlasrujana1@gmail.com", 
    pass: "cvxb dgnv svun jnhj", 
  },
});

app.post("/send-otp", (req, res) => {
  const { toEmail } = req.body; 

  if (!toEmail) {
    res.status(400).send("Recipient email is required");
    return;
  }

  const otp = Math.floor(100000 + Math.random() * 900000); 
  const mailOptions = {
    from: "katlasrujana1@gmail.com", 
    to: "srujanakatla06@gmail.com", 
    subject: "Your OTP Code",
    html: `<p>Your OTP code is <strong>${otp}</strong>. It is valid for 5 minutes.</p>`, 
    attachments: [
      {
        filename: "mail.txt",
        path: "bcrpty/mysql/mail.txt", 
      },
    ],
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error sending email:", err.message);
      res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent successfully:", info.response);
      res.status(200).send(`OTP sent successfully: ${otp}`);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});










// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//   service: "smtp.gmail.com", 
//   auth: {
//     user: "katlasrujana1@gmail.com",
//     pass: "cvxb dgnv svun jnhj", 
//   },
// });

// // app.post("/send-otp", (req, res) => {
// //   const { toEmail } = req.body; 

// //   if (!toEmail) {
// //     return res.status(400).json({ message: "Recipient email is required" });
// //   }

// //   const otp = Math.floor(100000 + Math.random() * 900000);

//   const mailOptions = {
//     from: "katlasrujana1@gmail.com", 
//     to: "srujanakatla06@gmail.com", 
//     subject: "Your OTP Code",
//     html: `<p>Your OTP code is . It is valid for 5 minutes.</p>`, 
//     attachments: [
//       {
//         filename: "mail.txt", 
//         path: "./mail.txt", 
//       },
//     ],
//   };

//   transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//       console.error("Error sending email:", err.message);
//       return res.status(500).json({ message: "Failed to send email", error: err.message });
//     }

//     console.log("Email sent successfully:", info.response);
//     res.status(200).json({ message: "OTP sent successfully", otp });
//   });
// // });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });
