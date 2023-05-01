import { auth } from "../auth/auth.js";

const logout = document.getElementById("logout");
const profileLink = document.getElementById("profileLink");
const beMemberLink = document.getElementById("beMemberLink");
const loginLink = document.getElementById("loginLink");

//LOGOUT BUTTON CONTROLLER

if (auth()) {
  logout.style.display = "block";
  profileLink.style.display = "block";

  beMemberLink.style.display = "none";
  loginLink.style.display = "none";
} else {
  logout.style.display = "none";
  profileLink.style.display = "none";

  loginLink.style.display = "block";
  beMemberLink.style.display = "block";
}

/////////////////////////////////////////
