const Firestore = require('@google-cloud/firestore');
const path = require('path');

export class FirestoreClient {

    firestore : any;

    constructor(){
        this.firestore = new Firestore({
            projectId: 'faceit-api-history',
            keyFilename: path.join(__dirname, './firestoreenv.json'),
        });
    }
    async save(collection : any, data : any){
        const docRef = this.firestore.collection(collection).doc(data.docName);
        await docRef.set(data);
    }

    async saveSubCollection(rootCol : any, rootDocName : any, subCol : any, subColData :any){
        const docRef = this.firestore.collection(rootCol).doc(rootDocName).collection(subCol).doc(subColData.docName);
        await docRef.set(subColData);
    }

    async saveByPath(path : any, data : any){
        const docRef = this.firestore.doc(path);
        await docRef.set(data);
    }
}

const Client = new FirestoreClient();

const burgerHut = {
    docName: 'burgerHut',
    employees: [
            {
                name: 'Hans',
                age: 30,
                position: 'Cheffe'
            },
            {
                name: 'Jannik',
                age: 31,
                position: 'Hartz'
            }
            ,
    ],
};

const save = async () => {
    await Client.save('employees', burgerHut);
}

const add = async () => {
    await Client.saveByPath('employees/burdqwerhut', burgerHut);
}

async function getDocument(db : any) {
    const start = Date.now();
    const cityRef = db.collection('employees').limit(2).get().then((snapshot: { docs: any[]; }) => {

        console.log(snapshot.docs.map(doc => doc.data()));
        // end timer
        const end = Date.now();
        console.log(`Time taken: ${end - start}ms`);
        
    });
}
