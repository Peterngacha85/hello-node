const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Hello Peter! 🚀");
  res.send("Greetings from your first Node.js app on Render!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
