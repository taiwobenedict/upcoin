import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
// const SERVER_URL = "http://localhost:5000/";

class BNBPayment {
  reportBnbPay(data) {
    return new Promise((resolve, reject) => {
      axios.post(`${SERVER_URL}bnb/bnbpay`, data)
        .then((response) => {
          resolve(response.data);
        }).catch((error) => {
          reject(error);
        });
    });
  }
}

export const bnbApi = new BNBPayment();
