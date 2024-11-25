const { write } = require("fs");
const http = require("http");

const server = http.createServer((request, res) => {
    res.setHeader("Content-Type", "text/html");

    if (request.url == "/") {
    res.write("<html>");
    res.write("<head><title>students</title></head>")
    res.write("<h1>Form Information</h1>")
    res.write('<input type="text" placeholder="enter name" ></br> </br><input type="number" placeholder="enter password"> </br> </br><button>submit</button>');
    
    }
    else if (request.url === "/students") {
        res.write("<h1>Student List</h1>")
        res.write(
            "<ul><li>Divya</li><li>Alfiya</li><li>Samiksha</li><li>Vaishu</li></ul>"
        );
        res.write("</body>");
        res.write("</html>")
        return res;
    }
});

const address = "127.0.0.1";
const port = 4000;

server.listen(port, address, () => {
    console.log("Server is running at http://" + address + ":" + port);
});