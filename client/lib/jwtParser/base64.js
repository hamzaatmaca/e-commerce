import atob from "./atob.js";

function base64Unicode(param) {
  return decodeURIComponent(
    atob(param).replace(/(.)/g, function (m, p) {
      var code = p.charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = "0" + code;
      }
      return "%" + code;
    })
  );
}

export default (tokenBody) => {
  let tokenSalt = tokenBody.replace(/-/g, "+").replace(/_/g, "/");

  switch (tokenSalt.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is length is not correct");
  }

  try {
    return base64Unicode(tokenSalt);
  } catch (err) {
    return atob(tokenSalt);
  }
};
