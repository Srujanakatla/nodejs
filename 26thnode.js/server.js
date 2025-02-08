// const http = require("http");
// const port = 3001;
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.method === "POST") {
//         let inputdata = "";

//         req.on("data", (chunk) => {
//             inputdata += chunk;
//         });

//         req.on("end", () => {
//             console.log("Received input data:", inputdata);

//             fs.readFile("./collect.js", "utf-8", (error, existingdata) => {
//                 if (error) {
//                     console.error("Error reading file:", error);
//                     res.statusCode = 500;
//                     res.end("Internal Server Error");
//                 } else {
//                     try {
//                         const newdata = JSON.parse(existingdata || "[]"); // Handle empty file gracefully
//                         newdata.push(JSON.parse(inputdata)); // Parse input data
//                         console.log("Updated data:", newdata);

//                         fs.writeFile("./collect.js", JSON.stringify(newdata, null, 2), (err) => {
//                             if (err) {
//                                 console.error("Error writing file:", err);
//                                 res.statusCode = 500;
//                                 res.end("Internal Server Error");
//                             } else {
//                                 res.statusCode = 200;
//                                 res.end("Data saved successfully");
//                             }
//                         });
//                     } catch (parseError) {
//                         console.error("JSON parsing error:", parseError);
//                         res.statusCode = 400;
//                         res.end("Invalid JSON data");
//                     }
//                 }
//             });
//         });

//         req.on("error", (err) => {
//             console.error("Request error:", err);
//             res.statusCode = 500;
//             res.end("Internal Server Error");
//         });
//     } else {
//         res.statusCode = 405; // Method Not Allowed
//         res.end("Only POST method is supported");
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });









const http = require("http")
const port = 3001;
const fs = require("fs");
// const { exit } = require("process");

const server = http.createServer((req, res)=>
{
    let inputdata = "";
    req.on("data",(x)=>{
        console.log(inputdata,"input data");
        fs.readFile("./collect.js","utf-8",(error,existingdata)=>{
            if(error)
            {
                console.log(error);
                res.end(error);
                
            }
            else{
                console.log(existingdata,"exit",typeof JSON.parse(existingdata));
                let newdata = JSON.parse(existingdata);
                newdata.push(inputdata);
                console.log(newdata);
                fs.writeFile("./collect.js",JSON.stringify(newdata),(err)=>{
                    if(err)
                    {
                        res.end(err);

                    }
                    else{
                        res.end(newdata);
                    }
                });
                
                
            }
        });
        
    });
    res.end();
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});













// const http = require("http")
// const port = 3001;
// const fs = require("fs");
// // const { exit } = require("process");


// const server = http.createServer((req, res)=>
// {
//     let inputdata = "";
//     req.on("data",(x)=>{
//         console.log(inputdata,"input data");
//         fs.readFile("./collect.js","utf-8",(error,existingdata)=>{
//             if(error)
//             {
//                 console.log(error);
//                 res.end(error);
               
//             }
//             else{
//                 console.log(existingdata,"exit",typeof JSON.parse(existingdata));
//                 let newdata = JSON.parse(existingdata);
//                 newdata.push(inputdata);
//                 console.log(newdata);
//                 fs.writeFile("./collect.js",JSON.stringify(newdata),(err)=>{
//                     if(err)
//                     {
//                         res.end(err);
a

//                     }
//                     else{
//                         res.end(newdata);
//                     }
//                 });
               
               
//             }
//         });
       
//     });
//     res.end();
// });


