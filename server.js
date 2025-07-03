const express = require("express");
const cors = require("cors"); // ✅ import cors

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // ✅ allow all origins

app.get("/", (req, res) => {
  console.log("Hello Peter! 🚀");
  res.send("Greetings from your first Node.js app on Render on July!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
