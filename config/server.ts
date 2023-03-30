export default ({ env }) => ({
  host: process.env["NODE_ENV"] === "production" ? "0.0.0.0" : "localhost",
  port: env.int('STRAPI_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
