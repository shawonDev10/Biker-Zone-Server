import jwt from "jsonwebtoken";
import { TJwtPayload } from "../../interface/auth";

export const createToken = (
  jwtPayload: TJwtPayload,
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};
