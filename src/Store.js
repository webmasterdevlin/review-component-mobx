import { loadReviews } from "./services/Reviews";

class Store {
  reviewList = [];

  async loadListOfReviews() {
    this.reviewList = await loadReviews();
  }

  addReview(review) {
    this.reviewList.push(review);
  }

  removeReview() {
    this.reviewList.pop();
  }

  get reviewCount() {
    return this.reviewList.length;
  }

  get averageScore() {
    let avr = 0;
    this.reviewList.map(event => (avr += event.stars));
    return Math.round((avr / this.reviewList.length) * 100) / 100;
  }
}

export default Store;
