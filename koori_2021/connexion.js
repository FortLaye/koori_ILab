require('dotenv').config();
import { Client } from 'pg';

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: '172.19.0.4',
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: 5432,
});

client.connect()
.then(() => console.log('connected'))
.catch(err => console.error('connection error', err.stack))

