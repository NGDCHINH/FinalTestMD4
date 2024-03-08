import express, { Express } from "express";
import { rootRoute } from "./routes";
import { createConnection } from "./configs/mysql.config";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();
//Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
// Route
rootRoute(app);
// MYSQL
createConnection();
const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
