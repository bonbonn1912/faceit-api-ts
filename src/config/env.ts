 import * as dotenv from 'dotenv';

 dotenv.config({ path: './../../.env' });

export const SECRETS = {
    API_KEY : process.env.FACEIT_API_KEY,
    PORT : process.env.PORT,
}