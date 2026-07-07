import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";
import { Role } from "../types/roles";

const authorize =
  (allowedRoles: Role[]) =>
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return next(new ApiError(401, "Unauthorized"));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(
        new ApiError(
          403,
          "You are not allowed to access this resource"
        )
      );
    }

    next();
  };

export default authorize;