// const arith = require("./module");
// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "content-Type": "text/html"});
//     res.write("<h1>hello world</h1>");
//     res.end();
//     console.log
//         (arith.sayhello(),
//             arith.add(1, 2),
//             arith.subtract(4, 2),
//             arith.subtract(5, 2));
// });
// server.listen(3000);
// ----------------------------------------
const arith = require("./module");
const http = require("http");

const server = http.createServer((req, res) =>{
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write("<h1>Hello World</h1>");
    res.end();
    console.log( 
        arith.sayHello(),
        arith.add(1, 2),
        arith.subtract(4, 2),
        arith.subtract(5, 2)
    );
} );
server.listen(3500);
// ------------------
// const http = require("http")
// let x = 0; 
// const server = http.createServer((req, res) => {
//      x += 1;
//      res.writeHead(200, {"COntent-Type": "text/html" });
//      res.write("<h1>hello world</h2>");
//      res.write(`<h2>${x}</h2>`);
//      res.end();
// });
// // start the server and listen
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });