const http = require("http");
const { Pool } = require("pg");

// Create a new PostgreSQL connection pool
const db = new Pool({
    user: "demotwo",
    host: "localhost",
    database: "myDatabaseone",
    password: "alfiya12",
    port: 5432,
});

// Function to handle the /menu route
async function getMenulist(req, res) {
   
        const result = await db.query("SELECT * FROM hotel_menu where id=2");
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(result.rows)); // Return only the rows

       
}

// Create the HTTP server
let server = http.createServer((req, res) => {
    if (req.url === "/menu") {
        getMenulist(req, res);
    } else {
        res.statusCode = 404; // Not Found
        res.end("PAGE NOT FOUND");
    }
});

// Start the server
server.listen(3600, "127.0.0.1", () => {
    console.log('Server is running on http://127.0.0.1:3600'); // Updated port in log message
});