const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

router.get("/walk.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("images/walk.jpg", res);
});

router.get("/index.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});
router.get("/courses.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/courses.html", res);
});
router.get("/contact.html", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/contact.html", res);
});
router.post("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/thanks.html", res);
});
router.get("/graph.png", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.png);
  utils.getFile("public/images/graph.png", res);
});

router.get("/product.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/product.jpg", res);
});
router.get("/views/index.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("views/index.css", res);
});
router.get("/main.js", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("main.js", res);
});
http.createServer(router.handle).listen(port);

console.log(`The server is listening on
    port number: ${port}`);
