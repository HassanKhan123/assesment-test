// * You may uncomment one of these modules:
const express = require("express");
// const koa = require('koa');
// const hapi = require('@hapi/hapi');
// const restify = require('restify');

module.exports = (stepService) => {
  const REST_PORT = 8080;

  const app = express();

  app.get("/users/:username/steps", (req, res) => {
    const params = req.params.username;
    const steps = stepService.get(params);

    console.log("steps", steps);
    if (!steps || !steps?.cumulativeSteps) {
      return res.status(404).json({ error: "User doesn't exist" });
    }
    console.log("STEpsspspsp", params, steps);
    return res.send(steps);
  });

  const server = app.listen(REST_PORT);

  return server;

  // * TODO: Write the GET endpoint, using `stepService` for data access
  // * TODO: Return object containing `close()` method for shutting down the server
};
