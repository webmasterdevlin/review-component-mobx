/* eslint-disable no-restricted-globals */
import { addReview, loadReviews, deleteReview } from "./services/Reviews";
import { action, computed, decorate, observable } from "mobx";

class Store {
  reviewList = [];

  async loadListOfReviews() {
    this.reviewList = await loadReviews();
  }

  async addReview(review) {
    this.reviewList.push(review);
    try {
      await addReview(review); // addReview of axios http service
    } catch (e) {
      if (e && e.response.status === 503)
        alert(`Review can't be saved at the moment`);
      this.reviewList.pop();
    }
  }

  async removeReview(id) {
    const confirmed = confirm("Delete?");
    console.log(confirmed);
    if (!confirmed) return;
    console.log("Check");

    const index = this.reviewList.findIndex(r => r.id === id);
    const reviewToRemove = this.reviewList.find(r => r.id === id);
    this.reviewList.splice(index, 1);
    console.log(index);
    console.log(reviewToRemove);
    console.log("DELETING:", id);

    try {
      await deleteReview(id); // addReview of axios http service
    } catch (e) {
      if (e && e.response.status === 503)
        alert(`Review can't be saved at the moment`);
      this.reviewList.splice(index, 0, reviewToRemove);
    }
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

decorate(Store, {
  reviewList: observable,
  addReview: action,
  removeReview: action,
  loadListOfReviews: action,
  averageScore: computed,
  reviewCount: computed
});

const reviewStore = new Store();
export default reviewStore;
