const express = require("express");
const app = express();
const port = 3100;

app.use(express.static("ft"));

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/Home", (req, res) => {
    res.send("<h1>Welcome to JK Coding<h1>");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
