'use strict';

const express = require(`express`);
const path = require(`path`);
const routing = require(`./router/routing`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;
const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.set(`view engine`, `pug`);
app.set(`views`, `${__dirname}/templates`);

app.use(routing);

app.listen(DEFAULT_PORT);
