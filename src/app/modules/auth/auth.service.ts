import appError from "../../errors/appError";
import { TJwtPayload } from "../../interface/auth";
import { UserModel } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
import { createToken } from "./auth.utils";
import config from "../../config";

const loginUser = async (payload: TLoginUser) => {
  const user = await UserModel.findOne({ email: payload?.email });
  const checkPass = await bcrypt.compare(
    payload?.password,
    user?.password as string,
  );

  if (!user) {
    throw new appError(404, "User not found !");
  } else if (!checkPass) {
    throw new appError(401, "Invalid credential");
  }

  const jwtPayload: TJwtPayload = {
    email: user?.email,
    role: user?.role as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.access_token_secret as string,
    config.access_token_expires as string,
  );

  return accessToken;
};

export const authServices = {
  loginUser,
};
