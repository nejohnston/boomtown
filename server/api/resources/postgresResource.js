const { Client } = require("pg");

const tq = tagIds =>
  tagIds.map((id, i) => `($1, $${1 + 2})`).join(", ");

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
      return new Promise((resolve, resolvers) => {
        client.query(
          "SELECT * FROM items WHERE item.itemowner = $1",
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
      const values = [
        title,
        description,
        imageurl,
        itemowner,
        tags
      ];
      const itemInsertQuery = `INSERT INTO items(title, description, imageurl, itemowner) 
                    VALUES($1, $2, $3, $4) RETURNING *`;
      try {
        await client.query("BEGIN");
        const itemResult = await client.query(
          itemInsertQuery,
          itemValues
        );

        const tagsInsertQuery = `INSERT INTO itemtags(itemid, tagid) VALUES ${tq(
          tagIds
        )}`;
        const tagsResult = await client.query(tagsInsertQuery, [
          itemResult.row[0].id,
          ...tagIds
        ]);
        await client.query("COMMIT");
        return itemResult;
      } catch (e) {
        await client.query("ROLLBACK");
        throw e;
      }
    }
    // updateItem(id) {}
  };
};
