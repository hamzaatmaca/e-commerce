import { arrTransform } from "../utils/arrayOp.js";
import { fetchPOST } from "../services/fetchPOST.js";
import QuickAlert from "../lib/quickAlert/quickAlert.js";

const signInputs = document.querySelectorAll(".signInput");
const signbutton = document.querySelector(".signbutton");

signbutton.addEventListener("click", (e) => {
  e.preventDefault();

  const inputs = arrTransform(signInputs);

  console.log(inputs);

  let payload = {
    email: inputs[0].value,
    password: inputs[1].value,
  };

  fetchPOST("sign", payload).then((data) => {
    if (Object.keys(data)[0] === "error") {
      new QuickAlert(data.error, "modal", 2500).fire();
    } else {
      localStorage.setItem("userToken", data.data);
      window.location.href = "/profile";
    }
  });
});
