const { Client } = require("pg");

module.exports = async app => {
  const client = new Client({
    user: app.get("PGUSER"),
    host: app.get("PGHOST"),
    database: app.get("PGDATABASE"),
    password: app.get("PGPASSWORD"),
    port: app.get("PGPORT")
  });
  await client.connect();
  client.query("SELECT $1::text as message", ["Hello world!"], (err, res) => {
    console.log(err ? err.stack : res.rows[0].message); // Hello World!
  });
  //   await client.end();
  return {
    getItems() {
      return;
    }
  };
};
