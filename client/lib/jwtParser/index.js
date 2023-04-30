import base64 from "./base64.js";

const JWTParser = (token) => {
  if (typeof token !== "string") {
    throw new Error("token must be string");
  }

  var section = token.split(".")[1];

  const decoded = base64(section);

  /*   return JSON.parse(decoded); */
};

export default JWTParser;
