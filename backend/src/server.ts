import express from "express";
import { db } from "./database/db";
import { router } from "./routes";
const cors = require("./middlewares/cors");

const app = express();

app.use(express.json());

app.use(cors);
app.use(router);

app.listen(3001, async () => {
  await db.sync();
  console.log("App running at 3001!");
});
