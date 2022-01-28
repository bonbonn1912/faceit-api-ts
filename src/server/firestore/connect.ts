const Firestore = require('@google-cloud/firestore');
const path = require('path');
import { SECRETS } from '../../config/env';

export class FirestoreClient {

    firestore : any;

    firebaseConfig  ={
        credentials : {
            private_key: SECRETS.GCP_PK,
            client_email : SECRETS.GCP_MAIL
        },
        projectId: "faceit-api-history"
    }

    constructor(){
        this.firestore = new Firestore(this.firebaseConfig);
    }
}

