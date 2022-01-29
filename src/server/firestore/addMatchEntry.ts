import { FirestoreClient } from './connect';
import { rawMatchroom } from '../controller/matchroom';

const Client = new FirestoreClient();
const db = Client.firestore;

export default async function addMatchToFirestore(key: string, match_id_string: string)   {

   var room =  rawMatchroom(key).getObject();

      const res = await db.collection('matches').doc(match_id_string).set({match : room ,timestamp: new Date()});
        console.log(res);
  //  const res = await db.collection('players').add({player : player, timestamp: new Date()});
  //  console.log(res.id);
};



