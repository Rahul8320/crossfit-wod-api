import express from "express";
import { configDotenv } from "dotenv";
import v1Router from "./v1/routes/index.js";

configDotenv();

// create the express app.
const app = express();
const PORT = process.env.PORT || 3000;

// add routers
app.use("/api/v1", v1Router);

// start the server
app.listen(PORT, () => {
  console.log(`⚙️ server is listening on port 👉 ${PORT}`);
});
