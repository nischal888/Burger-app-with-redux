export const fetchOrderApi = () => {
  return fetch("https://react-burgerapp-942a6.firebaseio.com/orders.json", {
    "Content-Type": "application/json",
    method: "GET",
  });
};
