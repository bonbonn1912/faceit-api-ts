import { MatchRoom } from '../interfaces/matchroom';
import { getMatchFromFaceit } from '../faceit/getMatchRoom';
import getPlayerElo from '../faceit/getFaceitElo';
import { AxiosResponse } from 'axios';

var activeMatches = new Map<string, MatchRoom>();

export function closeMatchroom(key:string) : void {
    activeMatches.delete(key);
}

export function createMatchroom(key: string, data: any): string {
    console.log(key);
    var tempMatchroom = new MatchRoom(key);
    activeMatches.set(key, tempMatchroom);
    setTeamnames(data.payload.teams, key);
    return key;
}

export function rawMatchroom(key:string) : any{
    return activeMatches.get(key);
}

export async function setMap(key: string, game_id: string) {
    getMatchFromFaceit(game_id).then((data: any) => {
        console.log(data.voting.map.pick);
        activeMatches.get(key)?.setMap(data.voting.map.pick);
    }).catch((err: any) => {
        activeMatches.get(key)?.setMap("map could not be fetched");
    })
}

export function getMatchroom(key: string): string | undefined {
    console.log("get Matchroom with key : " + key);
    if (activeMatches.has(key)) {
        return activeMatches.get(key)?.getString();;
    }
    return "This User is currently not in a matchroom";
}

function setTeamnames(teams: any, key: string): void {
    teams.forEach((singleTeam: any) => {
        activeMatches.get(key)?.addTeam(singleTeam.name);
        activeMatches.get(key)?.setLogoUrl(singleTeam.avatar);
    })
}

export function setAvgElo(key: string, game_id: string) {
    const teamFactions = ["faction1", "faction2"]
    getMatchFromFaceit(game_id).then((match: any) => {

        teamFactions.forEach((faction: any) => {
            getAvgElo(match.teams[faction].roster).then((elo: any) => {
                activeMatches.get(key)?.addAvgElo(elo);
            }).catch((err: any) => {
                activeMatches.get(key)?.addAvgElo(0);
            })
        })
    });

}

export function getAvgElo(roster: any): any {
    var avgElo: number = 0;
    var counter: number = 0;
    return new Promise((resolve, reject) => {
        roster.forEach((player: any) => {
            getPlayerElo(player.nickname).then((elo: any) => {
                avgElo += elo;
                counter++;
                if (counter > 4) {
                    resolve(Math.floor(avgElo / 5));
                }
            }).catch((error: any) => {
                reject(error);
            })
        }
        )
    })


}