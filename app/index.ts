import express from "express";
import helmet from "helmet";
import cors from "cors";
import jsend from "jsend";
import { join } from "path";
import bodyParser from "body-parser";

import logger from "../logger";
import todoRoutes from "./routes/todo";
import errorHandler from "../middlewares/error-handler";

const app = express();
const isVercel = process.env.DEPLOYMENT_ENV === "vercel";

// middleware routes
const isProduction = process.env.NODE_ENV === "production";
if (isProduction) {
  app.use(helmet());
}
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jsend.middleware); // more detail on https://github.com/omniti-labs/jsend
app.use(errorHandler);
const options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders(res, _path, _stat) {
    res.set("x-static-timestamp", Date.now());
  },
};

app.use("/static", express.static(join(__dirname, "../public"), options));

app.get("/", (_req, res) => {
  res.send("Open Swagger UI at http://localhost:3000/static/index.html");
});

app.get("/api", (_req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({ name: "Hello world" });
});

app.use("/api/todo", todoRoutes);

if (!isVercel) {
  app.listen(3000).on("listening", () => {
    logger.info("server is listening on port http://localhost:3000");
  });
}

module.exports = app;
