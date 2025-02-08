const http = require("http");
const port = 3001;
const fs = require("fs");

const server = http.createServer((req, res) => {
    let inputdata = "";

    req.on("data", (chunk) => {
        inputdata += chunk; 
    });
    req.on("end", () => {
        fs.readFile("./collect.js", "utf-8", (error, existingdata) => {
            if (error) {
                console.log(error);
                res.end("Error reading file");
                return;
            }
            let newdata = [];
            try {
                newdata = JSON.parse(existingdata);
            } catch (e) {
                console.log("Error parsing JSON", e);
            }
            if (!newdata.includes(inputdata)) {
                newdata.push(inputdata);
                fs.writeFile("./collect.js", JSON.stringify(newdata, null, 2), (err) => {
                    if (err) {
                        res.end("Error writing file");
                    } else {
                        res.end("Data added successfully");
                    }
                });
            } else {
                res.end("Duplicate entry not allowed");
            }
        });
    });
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
