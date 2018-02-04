const { Client } = require("pg");

const tq = tags =>
  tags.map((id, i) => `($1, $${i + 2})`).join(", ");

module.exports = async app => {
  const client = new Client({
    user: app.get("PGUSER"),
    host: app.get("PGHOST"),
    database: app.get("PGDATABASE"),
    password: app.get("PGPASSWORD"),
    port: app.get("PGPORT")
  });

  await client.connect();

  return {
    getItems() {
      return new Promise((resolve, reject) => {
        client.query("SELECT * FROM items", (err, data) => {
          resolve(data.rows);
        });
      });
    },
    getSingleItem(id) {
      return new Promise((resolve, reject) => {
        client.query(
          "SELECT * FROM items WHERE id = $1",
          [id],
          (err, data) => {
            resolve(data.rows);
          }
        );
      });
    },
    getTags(itemid) {
      return new Promise((resolve, reject) => {
        client.query(
          `SELECT * FROM tags 
            INNER JOIN itemtags 
            ON itemtags.tagid = tags.id 
            WHERE itemtags.itemid=$1`,
          [itemid],
          (err, data) => {
            resolve(data.rows);
          }
        );
      });
    },
    getSharedItems(userid) {
      return new Promise((resolve, reject) => {
        client.query(
          "SELECT * FROM items WHERE itemowner = $1",
          [userid],
          (err, data) => {
            resolve(data.rows);
          }
        );
      });
    },
    getBorrowedItems(userid) {
      return new Promise((resolve, reject) => {
        client.query(
          "SELECT * FROM items WHERE borrower = $1",
          [userid],
          (err, data) => {
            resolve(data.rows);
          }
        );
      });
    },
    async createItem({
      title,
      description,
      imageurl,
      itemowner,
      tags
    }) {
      const itemValues = [
        title,
        description,
        imageurl,
        itemowner
      ];
      tags = tags.map(tag => tag.id);
      const itemInsertQuery = `INSERT INTO items(title, description, imageurl, itemowner) VALUES($1, $2, $3, $4) RETURNING *`;
      try {
        await client.query("BEGIN");
        const itemResult = await client.query(
          itemInsertQuery,
          itemValues
        );

        const tagsInsertQuery = `INSERT INTO itemtags(itemid, tagid) VALUES ${tq(
          tags
        )}`;

        await client.query(tagsInsertQuery, [
          itemResult.rows[0].id,
          ...tags
        ]);
        await client.query("COMMIT");
        return itemResult.rows[0];
      } catch (e) {
        await client.query("ROLLBACK");
        throw e;
      }
    }
    // updateItem(id) {}
  };
};
