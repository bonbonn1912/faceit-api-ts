import axios, { AxiosResponse } from "axios";

export const getAoeElo = async (type: number) : Promise<any> => {
  let url = `https://aoe2.net/api/player/ratinghistory?game=aoe2de&leaderboard_id=${type}&steam_id=76561197973969690&count=10`;
  let response : any;
  return new Promise<any>((resolve, reject) => {
    try {
        response = axios.get(url);
        resolve(response);
      } catch (err) {
        reject(response);
      }
  })
 
};

