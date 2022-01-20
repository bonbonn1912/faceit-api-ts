import axios, { AxiosResponse } from 'axios';
import { SECRETS } from '../config/env';
import { PlayerModel } from '../interfaces/idModel';


export default async function getPlayerInfo(nickname: string): Promise<PlayerModel> {
    const url = `https://open.faceit.com/data/v4/players?nickname=${nickname}`;
    return new Promise<PlayerModel>((resolve, reject) => {
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${SECRETS.API_KEY}`
            }
        }).then((response: AxiosResponse) => {
            if (response.status === 200) {
                const playerModel: PlayerModel = {
                    isValid: true,
                    id: response.data.player_id,
                    username: response.data.nickname,
                    elo: response.data.games.csgo.faceit_elo
                };
                resolve(playerModel);
            }
        }).catch((error: AxiosResponse) => {
            const playerModel: PlayerModel = {
                isValid: false,
                id: "Invalid User",
                username: "Invalid User",
                elo: 0
            };
            reject(playerModel);
        }
        );
    })

}