import { PlayerModel } from "../interfaces/idModel";
import { FirestoreClient } from './connect';
import { initPlayerCollection } from "../interfaces/collectionData";

const Client = new FirestoreClient();
const db = Client.firestore;

export default async function addPlayerToFirestore(player: PlayerModel)  {
    const res = await db.collection('players').add({player : player, timestamp: new Date()});
    initPlayerCollection();
    console.log(res.id);
};



