import axios, { AxiosResponse } from 'axios';
import { SECRETS } from '../config/env';

export default async function getLastFiveGames(user_id: string): Promise<string> {
    const url = `https://open.faceit.com/data/v4/players/${user_id}/stats/csgo`;
    return new Promise<string>((resolve, reject) => {
     
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${SECRETS.API_KEY}`
            }
        }).then((response : AxiosResponse) => {
            resolve(response.data.lifetime["Recent Results"].map((result: number) => result < 1 ? "L/" : "W/").reverse().join("").slice(0, -1));
        }).catch((err: AxiosResponse) => reject(err));
    })
}

