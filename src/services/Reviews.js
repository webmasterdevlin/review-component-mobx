import { Endpoints } from "../utils/Endpoints";
import http from "./Http";

export async function loadReviews() {
  try {
    const { data } = await http.get(Endpoints.reviewUrl);

    return data;
  } catch (e) {
    alert(`Something happen: ${e.message}`);
  }
}

export async function addReview(review) {
  try {
    return await http.post(Endpoints.reviewUrl, JSON.stringify(review), {
      headers: { "Content-Type": "application/json; charset=utf-8" }
    });
  } catch (e) {
    console.log(e);
  }
}
