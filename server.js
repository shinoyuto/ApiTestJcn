const path = require('path');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const _ = require('lodash');

server.use(middlewares);
server.use(jsonServer.bodyParser);

// In this example we simulate a server side error response
router.render = (req, res) => {
  res.status(503).jsonp({
    error: "error message here"
  })
}
