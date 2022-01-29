export class MatchRoom {
    private streamer: string;
    private map: string;
    private teams: string[] = [];
    private avgElos: number[] = [];
    private logo_urls : string[] = [];

    constructor(streamer: string) {
        this.streamer = streamer;
        console.log("matchroom inizialized");
    }

    getString(): string {
        console.log("getString");
        try{
            return `${this.teams[0]} (${this.avgElos[0]}) vs. ${this.teams[1]} (${this.avgElos[1]}) on ${this.map}`;
        }catch(e){
            return `Invalid Matchroom please try again later`;
        }
    }

    getObject(): object{
        return {
            streamer: this.streamer,
            map: this.map,
            teams: this.teams,
            avgElos: this.avgElos,
            logo_urls: this.logo_urls,
            isRunning : true
        }
    }

    setLogoUrl(logo_url: string): void {
        this.logo_urls.push(logo_url);
    }

    setMap(map: string): void {
        console.log("Added : " + map);
        this.map = map;
    }

    addTeam(team: string): void {
        this.teams.push(team);
    }

    addAvgElo(elo: number): void {
        console.log("Added : " + elo);
        this.avgElos.push(elo);
    }
}