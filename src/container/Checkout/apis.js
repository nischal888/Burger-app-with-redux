export const orderIngredientsApi = (payload, tokenId) => {
  console.log("Api", payload);
  return fetch(
    `https://react-burgerapp-942a6.firebaseio.com/orders.json?auth=${tokenId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
};
