function add(a, b) {
    console.log(a + b);
  }
  
  function sub(a, b) {
    console.log(a - b);
  }
  
  function sayHello() {
    console.log("Hello");
  }
  
  function studentHandler(req, res) {
    (request, response) => {
      // Extract the URL
      let url = request.url;
  
      // Check if the URL matches "/students"
      if (url === "/students") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<html>");
        response.write("<head><title>Students</title></head>");
        response.write(
          "<body style='font-family: Arial, sans-serif; padding: 20px;'>");       
        response.write("<h1>Students List</h1>");
        response.write("<ul style='list-style-type: square;'>");
        response.write(
          "<li>Divya</li><li>Alfiya</li><li>Samiksha</li><li>Vaishu</li>"
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
        //request
        request.on("data", (chunk) => {
          body += chunk.toString();
          console.log(body);
        });
        request.on("end", () => {
          console.log("Received form data:" + body);
        });
        request.on("erroror", (err) => {});

        //responce
        
      } else {
        response.writeHead(404, { "Content-Type": "text/html" });
      }
  
      // For other URLs, respond with a 404 status
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end(
        "<html><body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body></html>"
      );
      console.log("Request received for an unknown URL:", request.url);
    };
  
    // Define the server address and port
    const address = "127.0.0.1";
    const port = 4000;
  
    // Start the server
    server.listen(port, address, () => {
      console.log("Server is running on http://" + address + ":" + port);
    });
  }
  
  module.exports = {
    add,
    sub,
    sayHello,
    studentHandler,
  };