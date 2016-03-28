
'use strict';
var bodyParser  = require('body-parser');
var express     = require('express');
var app         = express();

module.exports = server;

/**
 * Handles the server setup
 *
 * @param {int}  port number
 * @param {string}  path
 */
function server(port, path){

  // support url encoded bodies
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // CORS requres
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
  });

  // statics files location
  // TODO: change location for build
  app.use(express.static(path));

  app.get('/', (req, res)=>{
    res.sendFile(path + '/index.html');
  });


  // --- start the server ---
  // TODO: add port param from config
  app.listen(port, ()=>{
    console.log(`listening on localhost:${port}`);
  });
}
