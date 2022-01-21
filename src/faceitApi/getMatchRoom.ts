import axios, { AxiosResponse } from 'axios';
import { SECRETS } from '../config/env';

export function getMatchFromFaceit(match_id :string) : any{
    return new Promise((resolve, reject) => {
        axios.get(`https://open.faceit.com/data/v4/matches/${match_id}`, {
            headers: {
                'Authorization': `Bearer ${SECRETS.API_KEY}`
            }
        })
            .then((res) => {
             //  console.log(res.data);
                resolve(res.data);
            })
            .catch((error) => {
                reject(error.message);
            })
    })

}