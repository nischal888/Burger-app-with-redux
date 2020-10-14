export const fetchOrderApi = (tokenId) => {
  return fetch(
    `https://react-burgerapp-942a6.firebaseio.com/orders.json?auth=${tokenId}`,
    {
      "Content-Type": "application/json",
      method: "GET",
    }
  );
};
