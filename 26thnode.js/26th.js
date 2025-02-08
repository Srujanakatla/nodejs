// const http = require("http")
// const port = 3001;
// const server = http.createServer((req, res)=>
// {
//     res.writeHead(200,{"content-type":"application/json"})
//     res.write("hello world!")
//     res.end();
// });
// server.listen(port,()=>
// {
//     console.log("server is running");
    
// })


// const http = require("http")
// const port = 3001;
// const fs = require("fs")
// const server = http.createServer((res, req)=>{
// let data = " ";
// req.on("data",(chunk)=>{
// data+=chunk;
// console.log(data);
// fs.appendFile("./info.txt",data,(err)=>
// {
//  if (err){
//     res.end("error occured")
//  }
//  else{
//     res.end("data")
//  }
// });
// });
// });
// server.listen(port,()=>
// {
//     console.log("server is ruunning in nodejs file");
    
// })


const http = require("http");
const fs = require("fs");
const port = 3001;
const server = http.createServer((req, res) => {
    if (req.method === "POST") { 
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        });
            console.log("Received Data:", data);
            fs.appendFile("./infooo.txt", data, (err) => {
                if (err) {
                    res.end("Error occurred while saving data");
                } else {
                    res.writeHead(200, { "Content-Type": "text/plain" });
                    res.end("Data saved file ");
                }
            });
        }
    });
        // });
        // });

//         req.on("error", (err) => {
//             console.error("Error in request:", err);
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end("Error occurred during the request");
//         });
//     } else {
//         // Respond with a 405 for methods other than POST
//         res.writeHead(405, { "Content-Type": "text/plain" });
//         res.end("Method not allowed");
//     }
// });

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


