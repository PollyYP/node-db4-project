const server = require("./data/api/server");

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server started at localhost:3000");
});
