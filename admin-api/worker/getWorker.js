export const getWorker = (pathname) => {
  switch (pathname) {
    case "login":
      return Response.json({ data: ["array", "login"] });
    case "register":
      return Response.json({ data: ["array", "register"] });
  }
};
