// * You may uncomment one of these modules:
const express = require("express");
// const koa = require('koa');
// const hapi = require('@hapi/hapi');
// const restify = require('restify');

module.exports = (stepService) => {
  console.log("stepService", stepService.get());
  const REST_PORT = 8080;

  const app = express();

  app.get("/users/:username/steps", (req, res) => {
    const params = req.params.username;
    const steps = stepService.get(params);
    if (!steps) {
      res.statusCode(404).json("User doesn not exist");
    }
    console.log("STEpsspspsp", params, steps);
    res.send(steps);
  });

  app.listen(REST_PORT);

  // * TODO: Write the GET endpoint, using `stepService` for data access
  // * TODO: Return object containing `close()` method for shutting down the server
};
