import express, { Application } from "express";

import { eventEmitter } from '../server/ws/eventEmitter';
import { getMapCollection } from '../server/interfaces/collectionData';
import { getPlayerCollection } from '../server/interfaces/collectionData';
import * as defaultController from "./controller/default";
import * as getController from "./controller/getController";
import * as postController from "./controller/postController";
import * as http from "http";
import { Server } from 'socket.io';

import cors from "cors";
import bodyParser from "body-parser";


var app: Application = express();

const server = http.createServer(app);


const io = new Server(server);

io.on('connection', (socket) => {
    setInterval(() => {
        socket.emit('keepAlive');
    },45000)

    eventEmitter.on('sendToClient', () => {
        socket.emit('fetchData');
    });

});



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "./../client/"));

app.get("/elo", getController.elo);

app.get("/matchhistory", getController.matchhistory);

app.get("/checkelo", getController.checkElo);

app.get("/getmatch", getController.getMatch);

app.get("/internal/api/getLastPlayers", getController.getLastPlayers);

app.get("/internal/api/getLastMatches", getController.getLastMatches);

app.post("/internal/api/getMultiplePlayers", postController.getMultiplePlayers);

app.post("/match", postController.registerMatchroom);

app.get("/setup", defaultController.handleSetup);



app.get("/", defaultController.handleRoute);


export = server;
