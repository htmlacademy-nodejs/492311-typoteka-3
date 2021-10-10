'use strict';

const {Router} = require(`express`);
const searchRouter = new Router();

searchRouter.get(`/`, (req, res) => {
  const pageContent = {
    results: [
      {
        date: {
          datetime: '2019-03-21T20:33',
          string: '21.03.2019, 20:33'
        },
        text: 'Huawei открыла в России путешествия на смартфон Mate 30 Pro без сервисов Google'
      },
      {
        date: {
          datetime: '2019-03-21T20:33',
          string: '21.03.2019, 20:33'
        },
        text: '«Яндекс.Метрика» запустила путешествия сервис для оценки эффективности баннеров и видеорекламы в реальном времени'
      }
    ]
  };
  res.render(`search/search`, pageContent);
});

module.exports = searchRouter;
