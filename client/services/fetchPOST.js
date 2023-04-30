import { API } from "../utils/endpoints.js";

export async function fetchPOST(url = "", data = {}) {
  return new Promise((resolve, reject) => {
    const request = new Request(API + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    fetch(request)
      .then((response) => resolve(response.json()))
      .catch((err) => {
        reject(err);
      });
  });
}
