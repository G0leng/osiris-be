module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'null'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'null'),
      user: env('DATABASE_USERNAME', 'postgnullres'),
      password: env('DATABASE_PASSWORD', 'null'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
