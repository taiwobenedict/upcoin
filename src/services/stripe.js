import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
// const SERVER_URL = "http://localhost:5000/";

class StripePayment {
  checkout(data) {
    return new Promise((resolve, reject) => {
      axios.post(`${SERVER_URL}stripe/checkout-session`, data)
        .then((response) => {
          resolve(response.data);
        }).catch((error) => {
          reject(error);
        });
    });
  }
  portal(data) {
    return new Promise((resolve, reject) => {
      axios.post(`${SERVER_URL}stripe/portal-session`, data)
        .then((response) => {
          console.log("portal response >>> ", response);
          resolve(response.data);
        }).catch((err) => {
          console.error("portal error >>> ", err);
          reject(err);
        });
    });
  }
  webhook(data) {
    return new Promise((resolve, reject) => {
      axios.post(`${SERVER_URL}stripe/webhook`, data)
        .then((response) => {
          resolve(response.data);
        }).catch((error) => {
          reject(error);
        });
    });
  }
}

export const stripeApi = new StripePayment();
