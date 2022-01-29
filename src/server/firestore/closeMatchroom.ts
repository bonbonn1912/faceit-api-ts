import { FirestoreClient } from './connect';

const Client = new FirestoreClient();
const db = Client.firestore;

export default async function closeMatchRoomInFirestore(documentid: string)  {
      db.collection('matches').doc(documentid).update({
        [`match.isRunning`]: false
      }).catch(function(error : string) {
        console.log("Error updating document");
      });
   
   
};



