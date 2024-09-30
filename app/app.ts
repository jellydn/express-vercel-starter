import { join } from "node:path";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import jsend from "jsend";

import errorHandler from "../middlewares/error-handler";
import todoRoutes from "./routes/todo";

export const app = express();

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
	setHeaders(res: express.Response) {
		res.set("x-static-timestamp", Date.now().toString());
	},
};

app.use("/static", express.static(join(__dirname, "../public"), options));

app.get("/", (_req, res: express.Response) => {
	res.send("Open Swagger UI at http://localhost:3000/static/index.html");
});

app.get("/api", (_req, res: express.Response) => {
	res.setHeader("Content-Type", "application/json");
	res.json({ name: "Hello world" });
});

app.use("/api/todo", todoRoutes);
