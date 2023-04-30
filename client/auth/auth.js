import JWTParser from "../lib/jwtParser/index.js";

export const auth = () => {
  const token = localStorage.getItem("userToken");

  JWTParser(token);
  /*  return decoded; */
};
