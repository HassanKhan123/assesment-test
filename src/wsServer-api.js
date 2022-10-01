const WebSocketServer = require("ws").Server;
const express = require("express");
const { WebSocket } = require("ws");

module.exports = (stepService) => {
  console.log("stepService wss", stepService.get());
  const baseURL = "ws://localhost:8081";
  // const webSocket = new WebSocket(baseURL);

  // webSocket.onopen = (event) => {
  //   console.log(event);
  // };

  const wss = new WebSocketServer({ port: 8081 });

  wss.on("connection", function connection(ws) {
    ws.on("message", function message(data) {
      console.log("received: %s", data);
    });

    ws.on("open", function message(data) {
      console.log("open: %s", data);
    });

    // ws.on("listening", () => {
    ws.onmessage = ({ data }) => {
      console.log("DAYA====", data);
      let obj = JSON.parse(data);
      const getName = stepService.get(obj.username);
      obj.newSteps = obj.newSteps + getName.cumulativeSteps;

      console.log(obj);

      stepService.update(obj.newSteps, obj.ts, obj.username);
      // obj.newSte;
    };
  });

  // * TODO: Write the WebSocket API for receiving `update`s,
  //         using `stepService` for data persistence.
  // * TODO: Make sure to return an instance of a WebSocketServer,
  //         which contains `close()` method.

  return wss;
};
