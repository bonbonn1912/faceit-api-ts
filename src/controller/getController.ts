import {Request , Response } from 'express';
import  getPlayerInfo  from '../faceitApi/getFaceitId';
import  getAnswerString  from '../response/eloResponse';
import  checkEloParameters  from './checkQueryParameter';


export const elo = (req : Request, res : Response) => {
   if(checkEloParameters(req.query.username as string | undefined)){
       res.send("Invalid Parameter. Please try again");
   }else{
    getPlayerInfo(req.query.username as string).then((data) => {
        var answer: string = getAnswerString(data)
        res.send(answer);
    }).catch((err) => {
        res.send("Username not found. Please try again");
    });
   }
};