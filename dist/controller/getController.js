"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.elo = void 0;
const getFaceitId_1 = __importDefault(require("../faceitApi/getFaceitId"));
const eloResponse_1 = __importDefault(require("../response/eloResponse"));
const checkQueryParameter_1 = __importDefault(require("./checkQueryParameter"));
const elo = (req, res) => {
    if ((0, checkQueryParameter_1.default)(req.query.username)) {
        res.send("Invalid Parameter. Please try again");
    }
    else {
        (0, getFaceitId_1.default)(req.query.username).then((data) => {
            var answer = (0, eloResponse_1.default)(data);
            res.send(answer);
        }).catch((err) => {
            res.send("Username not found. Please try again");
        });
    }
};
exports.elo = elo;
