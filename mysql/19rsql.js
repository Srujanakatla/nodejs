// //
// app.post("/register", (req, res) => {
//     var { username, password, confirmPassword, email, role, phoneNo } = req.body;
  
//     // Email validation: must contain @ and end with .com or .in
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
  
//     // Phone number validation: must start with 9, 8, or 7 and be 10 digits long
//     const phoneRegex = /^[987]\d{9}$/;
  
//     // Password validation: must contain at least one special character, one uppercase, one lowercase, and be at least 8 characters long
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
//     if (!emailRegex.test(email)) {
//       return res.status(400).send({ msg: "Invalid email format. Must end with .com or .in" });
//     }
  
//     if (!phoneRegex.test(phoneNo)) {
//       return res.status(400).send({ msg: "Invalid phone number. Must start with 9, 8, or 7 and be 10 digits long" });
//     }
  
//     if (!passwordRegex.test(password)) {
//       return res.status(400).send({
//         msg: "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.",
//       });
//     }
  
//     if (password !== confirmPassword) {
//       return res.status(400).send({ msg: "Password and confirm password do not match" });
//     }
  
//     connect.query(
//       "select * from users1 where username = ? OR email = ?",
//       [username, email],
//       (err, data) => {
//         if (err) {
//           return res.status(500).send(err.message);
//         }
//         if (data.length > 0) {
//           return res.status(400).send({ msg: "User already exists with this username or email" });
//         } else {
//           const query = `INSERT INTO users1 (username, password, email, role, phoneNo) VALUES (?,?,?,?,?)`;
//           connect.query(query, [username, password, email, role, phoneNo], (err, data) => {
//             if (err) {
//               return res.status(500).send(err.message);
//             }
//             res.status(201).send({ msg: "Registration successful", data });
//           });
//         }
//       }
//     );
//   });
  