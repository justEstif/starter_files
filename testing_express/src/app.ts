import express, { urlencoded, json } from "express";
import router from "./routes";

const app = express();

// body parser
app.use(json());
app.use(urlencoded({ extended: false }));

// use routes in index
app.use("/", router);
export default app
