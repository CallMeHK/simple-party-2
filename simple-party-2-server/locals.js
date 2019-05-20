const setLocals = (app) => {
    app.locals.creds = [
        {
          username: "su",
          password: "123",
          id: 1,
          phrase: "doodle"
        },
        {
          username: "ty",
          password: "123",
          id: 2,
          phrase: "king me"
        }
      ];
      
      app.locals.key = "asdfasdfasdfasdf";
}

module.exports = setLocals;