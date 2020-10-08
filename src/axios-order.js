import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burgerapp-942a6.firebaseio.com/",
});

export default instance;
