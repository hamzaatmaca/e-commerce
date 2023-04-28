import { arrTransform } from "../utils/arrayOp.js";
import { fetchPOST } from "../services/fetchPOST.js";
import { validation } from "../utils/validation.js";

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
        alert("Şifreler Eşleşmiyor");
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
      alert("Tüm Alanları doldurunuz");
    }
  });
})();
