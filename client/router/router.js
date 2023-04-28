import { createTPL } from "../utils/createTPL.js";

/**
 * @desc
 * According to the url in the @param createTPL function, the controller.js in
 * the controller folder are loaded dynamically by the TPL class.
 * TPL class is in lib folder
 */

const router = () => {
  const pathname = location.pathname;

  switch (pathname) {
    case "/":
      createTPL("home");

      break;
    case "/sign":
      createTPL("sign");
      break;

    case "/register":
      createTPL("register");
      break;

    default:
      createTPL("home");
      break;
  }
};

export default router;
