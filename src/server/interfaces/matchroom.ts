export class MatchRoom {
    private streamer: string;
    private map: string;
    private Teams: string[] = [];
    private avgElos: number[] = [];

    constructor(streamer: string) {
        this.streamer = streamer;
        console.log("matchroom inizialized");
    }

    getString(): string {
        console.log("getString");
        try{
            return `${this.Teams[0]} (${this.avgElos[0]}) vs. ${this.Teams[1]} (${this.avgElos[1]}) on ${this.map}`;
        }catch(e){
            return `Invalid Matchroom please try again later`;
        }
    }

    setMap(map: string): void {
        console.log("Added : " + map);
        this.map = map;
    }

    addTeam(team: string): void {
        this.Teams.push(team);
    }

    addAvgElo(elo: number): void {
        console.log("Added : " + elo);
        this.avgElos.push(elo);
    }
}