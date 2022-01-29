import { FirestoreClient } from './connect';

const Client = new FirestoreClient();
const db = Client.firestore;

export default async function closeMatchRoomInFirestore(documentid: string)  {
    console.log(documentid);
    try{
      db.collection('matches').doc(documentid).update({
        [`match.isRunning`]: false
      });
    }catch(e){
      console.log("Dokument konnte nicht gelöscht werden");
    }
   
};



