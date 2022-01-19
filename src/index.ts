import app from './app';

import dotenv from 'dotenv';
dotenv.config();

import { SECRETS } from './config/env';

const PORT = SECRETS.PORT || 3000;

app.listen(PORT, ()=>{console.log('listening on port '+PORT)});
