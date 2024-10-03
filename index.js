// index.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //  Optional: Parse URL-encoded bodies

// Webhook endpoint
app.post("/webhook", (req, res) => {
  const data = req.body;
  console.log("Received webhook data:", data);

  // You can process the data here or store it as needed

  res.status(200).send("Webhook received successfully");
});

// Root endpoint
app.get("/", (req, res) => {
  const queryData = req.query; // Access query parameters directly from req.query
  console.log("Received webhook query Data:", queryData);

  // res.status(200).send("Webhook received successfully");
  res.send("Webhook server is running");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
