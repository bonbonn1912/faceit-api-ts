"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchRoom = void 0;
class MatchRoom {
    constructor(streamer) {
        this.Teams = [];
        // list: number[] = [1, 2, 3];
        this.avgElos = [];
        this.streamer = streamer;
        console.log("matchroom inizialized");
    }
    getString() {
        console.log("getString");
        try {
            return `${this.Teams[0]} (${this.avgElos[0]}) vs. ${this.Teams[1]} (${this.avgElos[1]}) on ${this.map}`;
        }
        catch (e) {
            return `Invalid Matchroom please try again later`;
        }
    }
    setMap(map) {
        console.log("Added : " + map);
        this.map = map;
    }
    addTeam(team) {
        this.Teams.push(team);
    }
    addAvgElo(elo) {
        console.log("Added : " + elo);
        this.avgElos.push(elo);
    }
}
exports.MatchRoom = MatchRoom;
