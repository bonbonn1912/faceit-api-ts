import axios, { AxiosResponse } from 'axios';
import { SECRETS } from '../../config/env';
import { PlayerModel } from '../interfaces/idModel';
import addPlayerToFirestore from '../firestore/addPlayerEntry';


export default async function getPlayerInfo(nickname: string): Promise<PlayerModel> {
    const url = `https://open.faceit.com/data/v4/players?nickname=${nickname}`;
    return new Promise<PlayerModel>((resolve, reject) => {
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${SECRETS.API_KEY}`
            }
        }).then((response: AxiosResponse) => {
            if (response.status === 200) {
                var sanitizedUrl : string = response.data.faceit_url.replace(/\{lang\}/g, 'en');
                const playerModel: PlayerModel = {
                    isValid: true,
                    id: response.data.player_id,
                    username: response.data.nickname,
                    elo: response.data.games.csgo.faceit_elo,
                    avatar: response.data.avatar,
                    url: sanitizedUrl
                };
                addPlayerToFirestore(playerModel);
                resolve(playerModel);
            }
        }).catch((error: AxiosResponse) => {
            const playerModel: PlayerModel = {
                isValid: false,
                id: "Invalid User",
                username: "Invalid User",
                elo: 0, 
                avatar: "Invalid User",
                url: "Invalid User"
            };
            reject(playerModel);
        }
        );
    })

}