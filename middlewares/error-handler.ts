import type { NextFunction, Request, Response } from "express";

function errorHandler(
	err: Error,
	_req: Request,
	res: Response,
	_next: NextFunction,
) {
	res.jsend.error(err);
}

export default errorHandler;
