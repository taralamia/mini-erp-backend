import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";
import { verifyAccessToken } from "../utils/jwt";
import { Role } from "../types/roles";

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new ApiError(401, "Unauthorized"));
  }

  const token = authHeader.split(" ")[1];

  const decoded = verifyAccessToken(token);

  req.user = {
    id: decoded.id,
    role: decoded.role as Role,
  };

  next();
};

export default authenticate;