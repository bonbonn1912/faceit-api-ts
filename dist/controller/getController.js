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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMatches = exports.getMatch = exports.checkElo = exports.matchhistory = exports.elo = void 0;
const getFaceitId_1 = __importDefault(require("../faceitApi/getFaceitId"));
const getFaceitHistory_1 = __importDefault(require("../faceitApi/getFaceitHistory"));
const getLastFiveGames_1 = __importDefault(require("../faceitApi/getLastFiveGames"));
const eloResponse_1 = __importDefault(require("../response/eloResponse"));
const matchroom_1 = require("./matchroom");
const check = __importStar(require("./checkQueryParameter"));
////////////////////////////////////////////////////////////////////////////////
const elo = (req, res) => {
    if (check.UsernameParameters(req.query.username)) {
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
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const matchhistory = (req, res) => {
    if (!check.LimitParameter(req.query.limit) && !check.UsernameParameters(req.query.username)) {
        (0, getFaceitId_1.default)(req.query.username).then((data) => {
            (0, getFaceitHistory_1.default)(data.id, parseInt(req.query.limit)).then((historyString) => {
                res.send(`${req.query.username}'s last ${parseInt(req.query.limit)} Games: ${historyString}`);
            });
        }).catch((err) => {
            res.send("Username not found. Please try again");
        });
    }
    else {
        res.send("Invalid Parameter. Please try again");
    }
    ;
};
exports.matchhistory = matchhistory;
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const checkElo = (req, res) => {
    if (check.UsernameParameters(req.query.username)) {
        res.send("Invalid Parameter. Please try again");
    }
    else {
        (0, getFaceitId_1.default)(req.query.username).then((data) => {
            var temp = data;
            (0, getLastFiveGames_1.default)(data.id).then((data) => {
                var answer = (0, eloResponse_1.default)(temp);
                res.send(answer + ` Last 5 Games: ${data}`);
            }).catch((err) => {
                var answer = (0, eloResponse_1.default)(temp);
                res.send(answer + ` Play at least 1 Game to see your history.`);
            });
        }).catch((err) => {
            res.send("Username not found. Please try again");
        });
    }
};
exports.checkElo = checkElo;
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const getMatch = (req, res) => {
    console.log("trying to key match with key: " + req.query.key);
    var answer = (0, matchroom_1.getMatchroom)(req.query.key);
    res.send(answer);
};
exports.getMatch = getMatch;
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const getAllMatches = (req, res) => {
    res.send("test");
};
exports.getAllMatches = getAllMatches;
