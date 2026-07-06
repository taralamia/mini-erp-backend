import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/ApiError";

const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new ApiError(404, `Route ${req.originalUrl} not found`));
};

export default notFound;