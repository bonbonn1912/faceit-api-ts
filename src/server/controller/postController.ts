import { Request , Response } from 'express';
import {createMatchroom , setMap, setAvgElo , closeMatchroom} from './matchroom';

export const  registerMatchroom =  (req: Request, res: Response) => {
    if(isNewGame(req.body.event)){
      var key:string = createMatchroom(req.headers.authorization as string, req.body);
      res.send(key);
      setMap(key, req.body.payload.id);
      setAvgElo(key, req.body.payload.id);
    }else if(req.body.event !== 'match_object_created'){
        closeMatchroom(req.headers.authorization as string)
        res.send("Match has been closed");
    }else{
        res.send("Invalid Post request");
    }
}


function isNewGame(event : string): boolean {
    if(event == 'match_status_configuring'){
        return true;
    }
    return false;
}