import express, { Application } from 'express';
import * as defaultController from './controller/default';
import * as getController from './controller/getController';


var app: Application = express();


app.get("/elo", getController.elo);

app.get("/matchhistory", getController.matchhistory);

app.get("/checkelo", getController.checkElo);

app.get("/*", defaultController.handleRoute);




export = app;