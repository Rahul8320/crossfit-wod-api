import { configDotenv } from "dotenv";
import app from "./app.js";
configDotenv();

const PORT = process.env.PORT || 3000;

// start the server
const server = app.listen(PORT, () => {
  console.log(`⚙️ server is listening on port 👉 ${PORT}`);
});

export default server;
