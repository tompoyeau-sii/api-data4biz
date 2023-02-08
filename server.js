const express = require('express')
const bodyParser = require("body-parser");
const apiRouter = require("./apiRouter").router;
const cors = require('cors');

const port = 8080;


const server = express()

server.use(cors({
    origin: '*',
}));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.get('/', function(req, res) {
    res.status(200).send('Server OK')
})

server.use("/api/", apiRouter);

server.listen(port, function() {
    console.log('Api en ligne : http://localhost:' + port)
})