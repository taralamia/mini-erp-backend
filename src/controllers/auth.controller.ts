import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import ApiResponse from "../utils/ApiResponse";
import authService from "../services/auth.service";

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await authService.login(email, password);

  res
    .status(200)
    .json(new ApiResponse(200, "Login successful", result));
});