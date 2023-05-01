import JWTParser from "../lib/jwtParser/index.js";

export const auth = () => {
  const token = localStorage.getItem("userToken");

  if (token) {
    const isUser = JWTParser(token);
    if (isUser.email.includes("@")) {
      return true;
    } else {
      throw new Error(`invalid user`);
    }
  } else {
    return false;
  }
};
