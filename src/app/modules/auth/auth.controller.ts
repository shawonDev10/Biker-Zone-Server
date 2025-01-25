import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { authServices } from "./auth.service";
import sandResponse from "../../utils/sandResponse";

const loginUserIntoBikerZone = catchAsync(
  async (req: Request, res: Response) => {
    const result = await authServices.loginUser(req.body);

    sandResponse(res, {
      success: true,
      statusCode: 200,
      message: "User login successfully",
      data: { token: result },
    });
  },
);

export const authControllers = {
  loginUserIntoBikerZone,
};
