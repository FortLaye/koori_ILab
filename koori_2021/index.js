const express = require('express');
const server = express();
const apiRouter = require('./apiRouter').router;
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session');
const Keycloak = require('keycloak-connect');
const memoryStore = new session.MemoryStore();

server.use(cors());

server.use(session({
    secret: 'KWhjV<T=-*VW<;cC5Y6U-{F.ppK+])Ub',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

const keycloak = new Keycloak({ store: memoryStore })

server.use(keycloak.middleware());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());


server.use('/api/', apiRouter);

server.get('/', function (req, res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur le serveur de kooriibox</h1>');
});

server.get('/rassoul', function (req, res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('yes');
});

server.listen(process.env.PORT || 3001,'0.0.0.0', function () {
    console.log('server en ecoute sur le port '+ process.env.PORT);
});

