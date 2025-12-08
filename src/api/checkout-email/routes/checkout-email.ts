export default {
  routes: [
    {
      method: "POST",
      path: "/checkout-email/send",
      handler: "checkout-email.send",
      config: { auth: false },
    },
  ],
};
