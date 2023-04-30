export default (tokenBody) => {
  console.log(tokenBody);
  let tokenSalt = tokenBody.replace(/-/g, "+").replace(/_/g, "/");
};
