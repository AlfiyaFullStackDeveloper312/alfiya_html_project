// const { write } = require("fs");
// const http = require("http");

// const server = http.createServer((request, res) => {
//    res.setHeader("Content-Type", "text/html");
//    if(request.url ==="/students") {
//     res.write("<html>");
//     res. write ("<head><title>students</title></head>")
//     res.write("<formv></form>");
//     res.write("</body>");
//     res.write("</html>");
//     res.end();
//     return res;
//    }else if (request.url === "/create student" && request.method === "post"){
//     let  reciveddata = "";
//     request.on("data", (chunk) => {
//         body += chunk.tostring();
//     });
//     request.on("end", () => {
//         console.log("DATA Submitted = " +  reciveddata);
//         // response
//         res.write("<html>")
//       res. write ("<head><title>students</title></head")
//       res.write(`<body>${reciveddata} your input is submitted`);
//       res.write("</body>");
//       res.write("</html>");
//       res.end();
//     });
//     request.on ("error" , (err) => {}) ;  
   
//    }else{
//     res.write("<html>")
//       res. write ("<head><title>students</title></head")
//       res.write("<body><h1>404</h1> " );
//       res.write("</body>");
//       res.write("</html>");
//       res.end()
//    }
// });

// const address = "127.0.0.1";
// const port = 4000;

// server.listen(port, address, () => {
//     console.log("Server is running at http://" + address + ":" + port);
// });
// -------------------------------------------------------------------------------

function studentHandler(req, response) {
    (res, response) => {
      // Extract the URL
      let url = request.url;
  
      // Check if the URL matches "/students"
      if (url === "/students") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<html>");
        response.write("<head><title>Students</title></head>");
        response.write(
          "<body style='font-family: Arial, sans-serif; padding: 20px;'>"
        );
        response.write("<h1>Students List</h1>");
        response.write("<ul style='list-style-type: square;'>");
        response.write(
          "<li>Alfiya</li><li>Divya</li><li>Samiksha</li><li>Vaishali</li>"
        );
        response.write("</ul>");
        response.write("</body>");
        response.write("</html>");
        return response.end();
      }
  
      // Check if the URL matches "/forms"
      else if (url === "/forms") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<html>");
        response.write("<head><title>Form Input</title></head>");
        response.write(
          "<body style='font-family: Arial, sans-serif; padding: 20px;'>"
        );
        response.write("<h1 style='color: rgb(0, 113, 113);'>Fill the Form</h1>");
        response.write(
          "<form acition='/submit' method='post' style='width: 300px;'>"
        );
        response.write(
          "<input type='text' placeholder='Enter your name' style='width: 100%; padding: 10px; margin-bottom: 10px;'><br /> "
        );
        response.write(
          "<input type='password' placeholder='Enter your password' style='width: 100%; padding: 10px; margin-bottom: 10px;'><br /> "
        );
        response.write(
          "<input type='submit' value='Submit' style='width: 100%; background-color: rgb(0, 113, 113); color: white; padding: 10px; border: none;'>"
        );
        response.write("</form>");
        response.write("</body>");
        response.write("</html>");
        return response.end();
      } else if (url === "/submit") {
        let body = "";
        request.on("data", (chunk) => {
          body += chunk.toString();
          console.log(body);
        });
        request.on("end", () => {
          console.log("Received form data:" + body);
        });
        request.on("erroror", (err) => {});
      } else {
        response.writeHead(404, { "Content-Type": "text/html" });
      }
  
      // For other URLs, respond with a 404 status
      response.writeHead(404,{ "Content-Type": "text/html" });
      response.end(
        "<html><body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body></html>"
      );
      console.log("Request received for an unknown URL:", request.url);
    };
  
    // Define the server address and port
    const address = "127.0.0.1";
    const port = 3000;
  
    // Start the server
    server.listen(port, address, () => {
      console.log("Server is running on http://" + address + ":" + port);
    });
  }