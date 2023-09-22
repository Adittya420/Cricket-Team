import express from "express";
import env from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/route.js";
import Connection from "./database/db.js";
const app = express();

env.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

const username1 = process.env.DB_USERNAME;
const password1 = process.env.DB_PASSWORD;

const PORT = 8000;

Connection(username1, password1);

app.listen(PORT, () => console.log("Server is running on 8000......."));
