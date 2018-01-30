const { Client } = require("pg");

module.exports = async app => {
  const client = new Client({
    user: "dbuser",
    host: "database.server.com",
    database: "mydb",
    password: "secretpassword",
    port: 3211
  });
  await client.connect();

  //   await client.end();
  return {
    getItems() {
      return;
    }
  };
};
