module.exports = {
  routes: [
    // {
    //  method: 'GET',
    //  path: '/email',
    //  handler: 'email.exampleAction',
    //  config: {
    //    policies: [],
    //    middlewares: [],
    //  },
    // },
    {
      method: "POST",
      path: "/email",
      handler: "email.create",
      config: {
        policies: [], 
        middlewares: [],
      }
    },
  ],
};
