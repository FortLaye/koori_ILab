require('dotenv').config();
import { Client } from 'pg';

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: 'postgres_db',
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: 5432,
});

client.connect()
.then(() => console.log('connected'))
.catch(err => console.error('connection error', err.stack))

