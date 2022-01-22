"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvgElo = exports.setAvgElo = exports.getMatchroom = exports.setMap = exports.createMatchroom = exports.closeMatchroom = void 0;
const matchroom_1 = require("../interfaces/matchroom");
const getMatchRoom_1 = require("../faceitApi/getMatchRoom");
const getFaceitElo_1 = __importDefault(require("../faceitApi/getFaceitElo"));
var activeMatches = new Map();
function closeMatchroom(key) {
    activeMatches.delete(key);
}
exports.closeMatchroom = closeMatchroom;
function createMatchroom(key, data) {
    console.log(key);
    var tempMatchroom = new matchroom_1.MatchRoom(key);
    activeMatches.set(key, tempMatchroom);
    setTeamnames(data.payload.teams, key);
    return key;
}
exports.createMatchroom = createMatchroom;
function setMap(key, game_id) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, getMatchRoom_1.getMatchFromFaceit)(game_id).then((data) => {
            var _a;
            console.log(data.voting.map.pick);
            (_a = activeMatches.get(key)) === null || _a === void 0 ? void 0 : _a.setMap(data.voting.map.pick);
        }).catch((err) => {
            var _a;
            (_a = activeMatches.get(key)) === null || _a === void 0 ? void 0 : _a.setMap("map could not be fetched");
        });
    });
}
exports.setMap = setMap;
function getMatchroom(key) {
    var _a;
    console.log("get Matchroom with key : " + key);
    if (activeMatches.has(key)) {
        return (_a = activeMatches.get(key)) === null || _a === void 0 ? void 0 : _a.getString();
        ;
    }
    return "This User is currently not in a matchroom";
}
exports.getMatchroom = getMatchroom;
function setTeamnames(teams, key) {
    teams.forEach((singleTeam) => {
        var _a;
        (_a = activeMatches.get(key)) === null || _a === void 0 ? void 0 : _a.addTeam(singleTeam.name);
    });
}
function setAvgElo(key, game_id) {
    const teamFactions = ["faction1", "faction2"];
    (0, getMatchRoom_1.getMatchFromFaceit)(game_id).then((match) => {
        teamFactions.forEach((faction) => {
            getAvgElo(match.teams[faction].roster).then((elo) => {
                var _a;
                (_a = activeMatches.get(key)) === null || _a === void 0 ? void 0 : _a.addAvgElo(elo);
            }).catch((err) => {
                var _a;
                (_a = activeMatches.get(key)) === null || _a === void 0 ? void 0 : _a.addAvgElo(0);
            });
        });
    });
}
exports.setAvgElo = setAvgElo;
function getAvgElo(roster) {
    var avgElo = 0;
    var counter = 0;
    return new Promise((resolve, reject) => {
        roster.forEach((player) => {
            (0, getFaceitElo_1.default)(player.nickname).then((elo) => {
                avgElo += elo;
                counter++;
                if (counter > 4) {
                    resolve(Math.floor(avgElo / 5));
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
}
exports.getAvgElo = getAvgElo;
