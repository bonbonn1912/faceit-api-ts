import getMatchEntries from "../firestore/getLastMatches";
import getPlayerEntries from "../firestore/getLastPlayers";

var allePlayers : object;
var alleMatches : object;

export function initPlayerCollection() : void {
    getPlayerEntries().then((data: any) => {
        allePlayers = data;
    })
}

export function getPlayerCollection() : object {
    
    return allePlayers;
}

export function initMapCollection() : void {
    getMatchEntries().then((data: any) => {
        alleMatches = data;
    })
}

export function getMapCollection() : object {
    return alleMatches;
}

