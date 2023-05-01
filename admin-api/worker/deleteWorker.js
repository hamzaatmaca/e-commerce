export const deleteWorker = (req, pathname) => {
  switch (pathname) {
    case "login":
      return req.json().then((param) => {
        return Response.json({ data: param });
      });

    case "register":
      return req.json().then((param) => {
        return Response.json({ data: param });
      });
  }
};
