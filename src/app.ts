import express, { Application } from 'express';
import * as defaultController from './controller/default';
import * as getController from './controller/getController';


var app: Application = express();


app.get("/elo", getController.elo);

app.get("/*", defaultController.handleRoute);




export = app;