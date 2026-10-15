const express = require("express");

const app = express();

app.get("/status", (req, res) => {
res.status(200).json({
status: "online",
message: "API is running",
timestamp: new Date().toISOString()
});
});

module.exports = app;

