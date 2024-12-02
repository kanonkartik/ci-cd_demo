const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello the world of , CI/CD!");
});

app.listen(3000, () => {
    console.log("App is running on http://localhost:3001");
});
