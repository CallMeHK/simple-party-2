const jwt = require("jsonwebtoken");

const setUpAuth = app => ({
  app,
  getToken: function({ id, username }) {
    const token = jwt.sign({ id, username }, app.locals.key);
    return token;
  },
  checkCreds: function(username, password, callback) {
    const user = app.locals.creds.find(creds => username === creds.username);
    if (!user) {
      callback({ error: "No user found" });
    } else if (user.password !== password) {
      callback({ error: "Invalid Password" });
    } else {
      callback(null, this.getToken(user));
    }
  },
  checkAuthorized: function(token, callback) {
    jwt.verify(token, app.locals.key, (err, decoded) => {
      if (err) {
        callback(err);
      } else {
        callback(null, decoded);
      }
    });
  }
});

module.exports = setUpAuth;
