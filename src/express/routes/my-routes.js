'use strict';

const {Router} = require(`express`);
const myRouter = new Router();

myRouter.get(`/`, (req, res) => {
  res.render(`my/notes/notes`);
});

myRouter.get(`/comments`, (req, res) => {
  res.render(`my/publications/publications`);
});

module.exports = myRouter;
