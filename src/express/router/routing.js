'use strict';

const {Router} = require(`express`);

const articlesRoutes = require(`./articles-routes`);
const registerRoutes = require(`./register-routes`);
const loginRoutes = require(`./login-routes`);
const searchRoutes = require(`./search-routes`);
const categoriesRoutes = require(`./categories-routes`);
const myRoutes = require(`./my-routes`);
const mainRoutes = require(`./main-routes`);

const app = new Router();

app.use(`/articles`, articlesRoutes);
app.use(`/categories`, categoriesRoutes);
app.use(`/register`, registerRoutes);
app.use(`/search`, searchRoutes);
app.use(`/login`, loginRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);
app.use((req, res) => {
  res.status(404);
  res.render(`404`);
});

module.exports = app;
