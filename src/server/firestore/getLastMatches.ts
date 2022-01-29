import { PlayerModel } from "../interfaces/idModel";
import { FirestoreClient } from './connect';

const Client = new FirestoreClient();
const db = Client.firestore;

export default async function getMatchEntries() {
    return new Promise<any>((resolve, reject) => {
        db.collection('matches').orderBy('timestamp', 'desc').limit(6).get().then((snapshot: { docs: any[]; }) => {
           var entries : any = snapshot.docs.map(doc => doc.data());
         //  var reversedEntries = entries.reverse();
           resolve(entries);
        });
    });
};



