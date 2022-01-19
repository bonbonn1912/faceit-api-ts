import app from './app';

import dotenv from 'dotenv';
dotenv.config();

import { SECRETS } from './config/env';

app.listen(SECRETS.PORT, ()=>{console.log('listening on port '+SECRETS.PORT)});
