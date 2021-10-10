'use strict';

const {Router} = require(`express`);
const myRouter = new Router();

myRouter.get(`/`, (req, res) => {
  const pageContent = {
    notes: [
      {
        date: {
          datetime: '2019-03-21T20:33',
          string: '21.03.2019, 20:33'
        },
        text: 'Huawei открыла в России предзаказ на смартфон Mate 30 Pro без сервисов Google'
      },
      {
        date: {
          datetime: '2019-03-21T20:33',
          string: '21.03.2019, 20:33'
        },
        text: 'Facebook разрешит пользователям копировать фотографии из соцсети в «Google Фото»'
      },
      {
        date: {
          datetime: '2019-03-21T20:33',
          string: '21.03.2019, 20:33'
        },
        text: 'Huawei открыла в России предзаказ на смартфон Mate 30 Pro без сервисов Google'
      }]
  };
  res.render(`my/notes/notes`, pageContent);
});

myRouter.get(`/comments`, (req, res) => {
  const pageContent = {
    publications: [
      {
        author: {
          imgsrc: 'img/avatar-small-2.png',
          name: 'Александр Петров'
        },
        date: {
          datetime: '2019-03-21T20:33',
          string: '21.03.2019, 20:33'
        },
        text: 'Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты.',
        source: '«Яндекс.Метрика» запустила бесплатный сервис для оценки эффективности баннеров и видеорекламы в реальном времени'
      },
      {
        author: {
          imgsrc: 'img/avatar-small-2.png',
          name: 'Александр Петров'
        },
        date: {
          datetime: '2019-03-21T20:33',
          string: '21.03.2019, 20:33'
        },
        text: 'Главреды «Дождя», Forbes и других СМИ попросили Роскомнадзор разъяснить штрафы за ссылки на сайты.',
        source: '«Яндекс.Метрика» запустила бесплатный сервис для оценки эффективности баннеров и видеорекламы в реальном времени'
      }]
  };
  res.render(`my/publications/publications`, pageContent);
});

module.exports = myRouter;
