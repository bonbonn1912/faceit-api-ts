import server from './app';
import { initMapCollection, initPlayerCollection } from './interfaces/collectionData';

import { SECRETS } from '../config/env';

const PORT = SECRETS.PORT || 9999;

console.log(SECRETS.API_KEY);

initPlayerCollection();
initMapCollection();


server.listen(PORT, ()=>{console.log('listening on port '+PORT + ' running in : ' +process.env.NODE_ENV)});
