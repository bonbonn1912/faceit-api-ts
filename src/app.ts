import express, { Application } from 'express';
import * as defaultController from './controller/default';
import * as getController from './controller/getController';
import * as postController from './controller/postController';
import bodyParser from 'body-parser';


var app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/elo", getController.elo);

app.get("/matchhistory", getController.matchhistory);

app.get("/checkelo", getController.checkElo);

app.get("/getmatch", getController.getMatch);

app.post("/match",postController.registerMatchroom); 

app.get("/*", defaultController.handleRoute);




export = app;