const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.locals.creds = [
  {
    username: "su",
    password: "123",
    phrase: "doodle"
  },
  {
    username: "ty",
    password: "123",
    phrase: "king me"
  }
];

app.locals.key = "asdfasdfasdfasdf";

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/auth", (req, res) => {
  console.log(req.body);
  const token = jwt.sign({ username: "su" }, app.locals.key);
  jwt.verify(token, app.locals.key, (err, decoded) => {
    if (err) {
      console.log(err);
    } else {
      console.log(decoded);
    }
  });
  res.json({ token });
});

app.listen(port, () => console.log(`Auth app listening on ${port}.....`));
