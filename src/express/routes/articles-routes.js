'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/add`, (req, res) => {
  res.render(`articles/edit`);
});

articlesRouter.get(`/:id`, (req, res) => {
  // const id = req.params[`id`];
  res.render(`articles/post`);
});

articlesRouter.get(`/category/:id`, (req, res) => {
  // const id = req.params[`id`];
  res.render(`category`);
});

articlesRouter.get(`/edit/:id`, (req, res) => {
  // const id = req.params[`id`];
  res.render(`articles/edit`);
});

module.exports = articlesRouter;
