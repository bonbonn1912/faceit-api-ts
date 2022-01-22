"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const defaultController = __importStar(require("./controller/default"));
const getController = __importStar(require("./controller/getController"));
const postController = __importStar(require("./controller/postController"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(__dirname + "/frontend/"));
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
module.exports = app;
