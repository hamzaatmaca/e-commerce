export const validation = (inputs) => {
  for (let i = 0; i < inputs.length; i++) {
    if (
      inputs[i].value === "" ||
      inputs[i].value === null ||
      inputs[i].value === undefined
    ) {
      return false;
    } else {
      return true;
    }
  }
};
