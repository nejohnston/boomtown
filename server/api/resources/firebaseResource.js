const firebase = require("firebase");
require("firebase/auth");

module.exports = app => {
  const firebaseApp = firebase.initializeApp(
    app.get("FIREBASE_CONFIG")
  );
  const db = firebaseApp.database();

  return {
    async getUsers() {
      let users = await db.ref("users").once("value");
      users = users.val();
      const userList = [];
      for (userid in users) {
        userList.push({
          id: userid,
          email: users[userid].email,
          fullname: users[userid].fullname,
          imageurl: ""
        });
      }
      return userList;
    },
    async getSingleUser(userid) {
      let user = await db.ref(`users/${userid}`).once("value");
      user = user.val();
      const userList = [];
      return {
        id: userid,
        ...user
      };
    }
  };
};
