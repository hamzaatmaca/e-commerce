import { arrTransform } from "../utils/arrayOp.js";
import { fetchPOST } from "../services/fetchPOST.js";
import { validation } from "../utils/validation.js";
import QuickAlert from "../lib/quickAlert/quickAlert.js";

//Register
const registerInputs = document.querySelectorAll(".beMemberInput");
const registerTextArea = document.querySelector(".beMemberTextArea");
const beMember = document.querySelector(".beMember");

const inputs = arrTransform(registerInputs);

(async () => {
  beMember.addEventListener("click", (e) => {
    e.preventDefault();

    let payload = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      password: "",
      address: registerTextArea.value,
    };

    const validate = validation(inputs);

    if (validate) {
      if (inputs[4].value !== inputs[5].value) {
        new QuickAlert("Şifreler Eşleşmiyor", "timeOut", 2500).fire();
      } else {
        payload.name = inputs[0].value;
        payload.surname = inputs[1].value;
        payload.email = inputs[2].value;
        payload.phone = inputs[3].value;
        payload.password = inputs[4].value;

        fetchPOST("register", payload).then((data) => {
          console.log(data);
        });
      }
    } else {
      new QuickAlert("Tüm Alanları Doldurunuz", "modal", 2500).fire();
    }
  });
})();
