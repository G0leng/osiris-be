module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac1752577fb5f3f5089be900d3835f58'),
  },
});
