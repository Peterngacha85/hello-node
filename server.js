const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 10000;

// Enable CORS for all routes
app.use(cors());

// Root route
app.get("/", (req, res) => {
  console.log("✅ GET / hit");
  res.send("Greetings from your first Node.js app on Render july!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
