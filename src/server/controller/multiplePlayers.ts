import axios, { AxiosResponse } from 'axios';
import { SECRETS } from '../../config/env';
// import { addMultiplePlayers } from '../firestore/addPlayerEntry';

export default async function getMultiplePlayersByID(players : any){
    let newPlayers : any = [];
    await Promise.all(players.map(async (player : any) => {
        let eloResp = await getPlayerElo(player.steam64ID);
        player.elo = eloResp;
        newPlayers.push(player);
       }));  
  //  addMultiplePlayers(newPlayers);
    return newPlayers;
}

async function getPlayerElo(steam64id : number): Promise<number | string> {
    const url = `https://open.faceit.com/data/v4/players?game=csgo&game_player_id=${steam64id}`;
    return new Promise<number | string>((resolve, reject) => {
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${SECRETS.API_KEY}`
            }
        }).then((response: AxiosResponse) => {
            if (response.status === 200) {
                resolve(response.data.games.csgo.faceit_elo);
            }
        }).catch((error: AxiosResponse) => {
            resolve("no elo");
        }
        );
    })

}