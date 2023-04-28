import { API } from "../utils/endpoints.js";

export async function fetchPOST(url = "", data = {}) {
  const request = new Request(API + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return fetch(request).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}
