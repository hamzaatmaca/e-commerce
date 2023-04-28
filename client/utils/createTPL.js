import { app } from "./dom.js";
import TPL from "../lib/tplEngine.js";

/**
 *
 * @param {String} param
 * @desc param variable is represent url pathname
 * @returns {String} HTML template and dynamic controller.js
 */

export const createTPL = (param) => {
  return new TPL(param).collectTpl().then((res) => {
    app.innerHTML = res;
  });
};
