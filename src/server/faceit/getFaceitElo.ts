import axios, { AxiosResponse } from 'axios';
import { SECRETS } from '../../config/env';

export default async function getPlayerElo(nickname: string): Promise<number | string> {
    const url = `https://open.faceit.com/data/v4/players?nickname=${nickname}`;
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
            reject(error);
        }
        );
    })

}