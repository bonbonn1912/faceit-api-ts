import { Request , Response } from 'express';
import addMatchToFirestore from '../firestore/addMatchEntry';
import closeMatchRoomInFirestore from '../firestore/closeMatchroom';
import { initMapCollection } from '../interfaces/collectionData';
import checkPostBody from '../response/bodyResponse';
import {createMatchroom , setMap, setAvgElo , closeMatchroom} from './matchroom';
import getMultiplePlayersByID from './multiplePlayers';


export const  registerMatchroom =  (req: Request, res: Response) => {
    if(isNewGame(req.body.event)){
      var key:string = createMatchroom(req.headers.authorization as string, req.body);
      res.send(key);
      setMap(key, req.body.payload.id);
      setAvgElo(key, req.body.payload.id);
      setTimeout(() => {
          addMatchToFirestore(key,req.body.payload.id);
      },5000)
      setTimeout(() => {
        initMapCollection();
    },6000)
    }else if(req.body.event !== 'match_object_created'){
        closeMatchroom(req.headers.authorization as string)
        closeMatchRoomInFirestore(req.body.payload.id as string);
        setTimeout(() => {
            initMapCollection();
        },3000);
       
        res.send("Match has been closed");
    }else{
        res.send("Invalid Post request");
    }
}

export const getMultiplePlayers = async (req: Request, res: Response) => {
    if(checkPostBody(req.body)){
        let newPlayers : any = await getMultiplePlayersByID(req.body);
        res.send(newPlayers);
    }else{
        res.send("Invalid Post Data"); 
    }
    
}


function isNewGame(event : string): boolean {
    if(event == 'match_status_configuring'){
        return true;
    }
    return false;
}