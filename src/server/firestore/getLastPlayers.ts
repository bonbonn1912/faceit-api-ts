import { PlayerModel } from "../interfaces/idModel";
import { FirestoreClient } from './connect';

const Client = new FirestoreClient();
const db = Client.firestore;

export default async function getPlayerEntries() {
    return new Promise<any>((resolve, reject) => {
        db.collection('players').orderBy('timestamp', 'desc').limit(8).get().then((snapshot: { docs: any[]; }) => {
           var entries : any = snapshot.docs.map(doc => doc.data());
         //  var reversedEntries = entries.reverse();
           resolve(entries);
        });
    });
};



