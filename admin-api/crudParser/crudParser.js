import { getWorker } from "../worker/getWorker";
import { postWorker } from "../worker/postWorker";
import { deleteWorker } from "../worker/deleteWorker";
import { updateWorker } from "../worker/updateWorker";

export const crudParser = (req, pathname) => {
  switch (req.method) {
    case "GET":
      return getWorker(pathname);
    case "DELETE":
      return deleteWorker(req, pathname);
    case "PUT":
      return updateWorker(req, pathname);
    case "POST":
      return postWorker(req, pathname);

    default:
      return Response.json({ data: "Wrong API Endpoint" });
  }
};
