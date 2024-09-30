import logger from "../logger";
import { app } from "./app";

const isVercel = process.env.DEPLOYMENT_ENV === "vercel";
if (!isVercel) {
	app.listen(3000).on("listening", () => {
		logger.info("server is listening on port http://localhost:3000");
	});
}

module.exports = app;
