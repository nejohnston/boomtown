module.exports = app => {
  // Postgresql config
  app.set("PGUSER", process.env.PGUSER || "boomtowndb");
  app.set("PGPASSWORD", process.env.PGPASSWORD || "boomtowndb");
  app.set("PGDATABASE", process.env.PGDATABASE || "boomtowndb");
  app.set("PGHOST", process.env.PGHOST || "localhost");
  app.set("PGPORT", process.env.PGPORT || "5432");
  // GRAPHQL CONFIGS
  // app.set('GQL_PORT', process.env.GQL_PORT || "1337");
  // EXPRESS CONFIG
  app.set("PORT", process.env.PORT || "3002");
  app.set("JSON_PORT", "4000");
};
