export const orderIngredientsApi = (payload) => {
  console.log("Api", payload);
  return fetch("https://react-burgerapp-942a6.firebaseio.com/orders.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};
