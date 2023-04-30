export const logoutController = () => {
  localStorage.removeItem("userToken");
  window.location.pathname = "/";
};
