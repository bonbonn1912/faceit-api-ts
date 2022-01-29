import { FirestoreClient } from './connect';
import { rawMatchroom } from '../controller/matchroom';

const Client = new FirestoreClient();
const db = Client.firestore;

export default async function addMatchToFirestore(key: string, match_id_string: string)   {

   var room =  rawMatchroom(key).getObject();

      const res = await db.collection('matches').doc(match_id_string).set({match : room ,timestamp: new Date(), match_id: match_id_string});
};



