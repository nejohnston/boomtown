module.exports = app => {
  // Postgresql config
  app.set("PGUSER", process.env.PGUSER || "boomtowndb");
  app.set("PGPASSWORD", process.env.PGPASSWORD || "boomtowndb");
  app.set("PGDATABASE", process.env.PGDATABASE || "boomtowndb");
  app.set("PGHOST", process.env.PGHOST || "localhost");
  app.set("PGPORT", process.env.PGPORT || "5432");
  // GRAPHQL CONFIGS
  // app.set("GQL_PORT", process.env.GQL_PORT || "1337");
  // EXPRESS CONFIG
  app.set("PORT", process.env.PORT || "3002");
  // Firebase Configuration
  app.set("FIREBASE_CONFIG", {
    apiKey: "AIzaSyDze6bVW_t7sZE5gJnlLPo2rRYKQeIp9go",
    authDomain: "boomtown-1622f.firebaseapp.com",
    databaseURL: "https://boomtown-1622f.firebaseio.com",
    projectId: "boomtown-1622f",
    storageBucket: "boomtown-1622f.appspot.com",
    messagingSenderId: "763880817478"
  });
};
