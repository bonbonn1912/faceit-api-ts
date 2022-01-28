import app from './app';

import { SECRETS } from '../config/env';

const PORT = SECRETS.PORT || 9999;

console.log(SECRETS.API_KEY);

app.listen(PORT, ()=>{console.log('listening on port '+PORT + ' running in : ' +process.env.NODE_ENV)});
