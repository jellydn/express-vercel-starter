import logger from "../logger";
import { app } from "./app";

app.listen(3000).on("listening", () => {
	logger.info("server is listening on port http://localhost:3000");
});

module.exports = app;
