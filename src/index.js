import { configDotenv } from "dotenv";
import app from "./app.js";
import v1SwaggerDocs from "../src/v1/swagger.js";

configDotenv();

const PORT = process.env.PORT || 3000;

// start the server
const server = app.listen(PORT, () => {
  console.log(`⚙️ server is listening on port 👉 ${PORT}`);

  // Add swagger documentation
  v1SwaggerDocs(app, PORT);
});

export default server;
