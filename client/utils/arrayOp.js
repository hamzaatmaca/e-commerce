export const arrTransform = (param) => {
  if (typeof param !== "object")
    throw new Error("arrTransformError - param must be object");
  return Array.from(param);
};
