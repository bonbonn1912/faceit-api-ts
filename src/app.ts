import express, { Application } from "express";
import * as defaultController from "./controller/default";
import * as getController from "./controller/getController";
import * as postController from "./controller/postController";
import cors from "cors";
import bodyParser from "body-parser";

var app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/frontend/"));

app.get("/elo", getController.elo);

app.get("/matchhistory", getController.matchhistory);

app.get("/checkelo", getController.checkElo);

app.get("/getmatch", getController.getMatch);

app.get("/internal/api/getallcurrentgames", getController.getAllMatches);

app.post("/match", postController.registerMatchroom);

app.get("/home", defaultController.handleRoute);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/index.html");
});

export = app;
