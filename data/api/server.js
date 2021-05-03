const express = require("express");
const recipesRouter = require("./recipes_router");
const server = express();

server.use(express.json());
server.use("/api/recipes", recipesRouter);

server.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    message: "Something went wrong",
  });
});

module.exports = server;
