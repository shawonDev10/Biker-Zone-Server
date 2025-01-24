import appError from "../../errors/appError";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  const user = await UserModel.findOne(
    { email: payload?.email },
    { _id: 0, email: 1 },
  );

  // Checking if the user already exist or not
  if (user) {
    throw new appError(400, "This email is already in use !");
  }

  const result = await UserModel.create(payload);
  return result;
};

export const userServices = {
  createUserIntoDB,
};
