const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolvers");

const setLocals = require("./locals");
const setUpAuth = require("./auth");

const app = express();
const port = 3001;
// Some fake data
let todos = [
  {
    id: 1,
    todo: "Drink Beer",
    done: false
  },
  {
    id: 2,
    todo: "Eat cheese",
    done: false
  },
  {
    id: 3,
    todo: "Make soup",
    done: false
  }
];


app.use(bodyParser.json());
app.use(cors());

setLocals(app);
const auth = setUpAuth(app);

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/auth", (req, res) => {
  auth.checkCreds(req.body.username, req.body.password, (err, token) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ token });
    }
  });
});

app.post("/phrase", (req, res) => {
  auth.checkAuthorized(req.get('auth'), (err, decoded) =>{
    if(err){
      res.json(err)
    } else {
      res.json(decoded)
    }
  })
});

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers(todos)
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen(port, () => console.log(`Auth app listening on ${port}.....`));
