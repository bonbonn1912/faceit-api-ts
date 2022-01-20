import axios, { AxiosResponse } from 'axios';
import { SECRETS } from '../config/env';



export default async function getMatchHistory(user_id: string, limit: number): Promise<string> {
    const url = `https://open.faceit.com/data/v4/players/${user_id}/history?game=csgo&offset=0&limit=${limit}`
    return new Promise<any>((resolve, reject) => {
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${SECRETS.API_KEY}`
            }
        }).then((response: AxiosResponse) => { 
            isWinner(response, user_id).then((historyString: string) => {
                if(historyString.length < limit*2){
                   resolve(`Your history is not long enough to show your requested ${limit} games`);
                }else{
                    resolve(historyString);
                }
               
            });

        }).catch((err: AxiosResponse) => reject(err));
    })
}


async function isWinner(response: any, user_id: string): Promise<string> {
    var historyString = "";
    await  response.data.items.forEach((match: any) => {
        var counter = 5;
            match.teams[match.results.winner].players.forEach((singlePlayer:any)=>{
                if (singlePlayer.player_id !== user_id) {
                    counter--;
                }
            });
        if (counter < 1) {
            historyString += "L/";
         } else {
            historyString += "W/";
         }
    });
    return historyString.slice(0, -1);
}





