import { Request, Response } from "express";

const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
  host: 'redis-server'  //name that we mentioned in docer-compose.yml file
});
client.set('visits', 0);

app.get('/', (_ : Request, res : Response) => {
//   process.exit(0)
  client.get('visits', (_: Error, visits : string) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
