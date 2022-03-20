import { Request, Response } from 'express';
import getPlayerInfo from '../faceit/getFaceitId';
import getMatchHistory from '../faceit/getFaceitHistory';
import getLastFiveGames from '../faceit/getLastFiveGames';
import getAnswerString from '../response/eloResponse';
import {getMatchroom} from './matchroom'
import { PlayerModel } from '../interfaces/idModel';
import * as check from './checkQueryParameter';
import { AxiosResponse } from 'axios';
import { getMapCollection, getPlayerCollection } from '../interfaces/collectionData';

////////////////////////////////////////////////////////////////////////////////


export const elo = (req: Request, res: Response) => {
    if (check.UsernameParameters(req.query.username as string | undefined)) {
        res.send("Invalid Parameter. Please try again");
    } else {
        getPlayerInfo(req.query.username as string).then((data : PlayerModel) => {
            var answer: string = getAnswerString(data)
            res.send(answer);
        }).catch((err : AxiosResponse) => {
            res.send("Username not found. Please try again");
        });
    }
};


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


export const matchhistory = (req: Request, res: Response) => {
    if (!check.LimitParameter(req.query.limit) && !check.UsernameParameters(req.query.username as string | undefined)) {
        getPlayerInfo(req.query.username as string).then((data: PlayerModel) => {
            getMatchHistory(data.id as string, parseInt(req.query.limit as string)).then((historyString: string) => {
                res.send(`${req.query.username}'s last ${parseInt(req.query.limit as string)} Games: ${historyString}`);
            })
        }).catch((err : AxiosResponse) => {
            res.send("Username not found. Please try again");
        }); 
    } else {
        res.send("Invalid Parameter. Please try again");
    };
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


export const checkElo = (req: Request, res: Response) => {
    if (check.UsernameParameters(req.query.username as string | undefined)) {
        res.send("Invalid Parameter. Please try again");
    } else {
        getPlayerInfo(req.query.username as string).then((data: PlayerModel) => {
            var temp = data;
            getLastFiveGames(data.id).then((data : string) => {
                var answer: string = getAnswerString(temp)
                res.send(answer + ` Last 5 Games: ${data}`);
            }).catch((err : AxiosResponse) => {
                var answer: string = getAnswerString(temp)
                res.send(answer + ` Play at least 1 Game to see your history.`);
            });
        }
        ).catch((err : AxiosResponse) => {
            res.send("Username not found. Please try again");
        });
    }
}



////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const getMatch = (req: Request, res: Response) => {
    console.log("trying to key match with key: " + req.query.key)
    var answer:string | undefined = getMatchroom(req.query.key as string);
    res.send(answer)
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const getLastPlayers = (req: Request, res: Response) => {
    res.send(getPlayerCollection());
}

export const getLastMatches = (req: Request, res: Response) => {
    res.send(getMapCollection());
}