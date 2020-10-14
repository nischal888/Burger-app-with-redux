export const authenticateUserApi = (payload, isSignUp) => {
  console.log(isSignUp);
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQMN48K6wZSXBubeTNR7eT8TH_q_EvdEo";
  if (!isSignUp) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQMN48K6wZSXBubeTNR7eT8TH_q_EvdEo";
  }
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application / json" },
    body: JSON.stringify(payload),
  });
};
