'use strict';

const {Router} = require(`express`);
const categoriesRouter = new Router();

categoriesRouter.get(`/`, (req, res) => {
  const pageContent = {
    categories: [
      {
        value: `Жизнь и путешествия`
      },
      {
        value: `Путешествия`
      },
      {
        value: `Дизайн и программирование`
      },
      {
        value: `Другое`
      },
      {
        value: `Личное`
      }]
  };
  res.render(`categories/categories`, pageContent);
});

module.exports = categoriesRouter;
