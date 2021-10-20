'use strict';

const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/add`, (req, res) => {
  res.render(`articles/edit`);
});

articlesRouter.get(`/:id`, (req, res) => {
  // const id = req.params[`id`];
  const pageContent = {
    themes: [
      {
        description: `Автомобили`,
        number: `88`
      },
      {
        description: `Удалённая работа`,
        number: `14`
      },
      {
        description: `Бизнес`,
        number: `43`,
        active: true
      }],
    comments: [
      {
        author: {
          imgsrc: `../img/avatar-1.png`,
          name: `Евгений Петров`
        },
        date: {
          datetime: `2019-03-21T20:33`,
          string: `21.03.2019, 20:33`
        },
        message: `Автор, ты все выдумал, покайся`
      },
      {
        author: {
          imgsrc: `../img/avatar-3.png`,
          name: `Александр Марков`
        },
        date: {
          datetime: `2019-03-21T20:33`,
          string: `21.03.2019, 20:33`
        },
        message: `Конечно, прежде чем так писать, нужно искренне приложить усилия, чтобы разобраться — не все люди умеют выражать свои мысли.`
      },
      {
        author: {
          imgsrc: `../img/avatar-5.png`,
          name: `Евгений Петров`
        },
        date: {
          datetime: `2019-03-21T20:33`,
          string: `21.03.2019, 20:33`
        },
        message: `Автор, ты все выдумал, покайся`
      },
      {
        author: {
          imgsrc: `../img/avatar-4.png`,
          name: `Александр Марков`
        },
        date: {
          datetime: `2019-03-21T20:33`,
          string: `21.03.2019, 20:33`
        },
        message: `Конечно, прежде чем так писать, нужно искренне приложить усилия, чтобы разобраться — не все люди умеют выражать свои мысли.`
      }]
  };
  res.render(`articles/post`, pageContent);
});

articlesRouter.get(`/category/:id`, (req, res) => {
  // const id = req.params[`id`];
  const pageContent = {
    themes: [
      {
        description: `Автомобили`,
        number: `88`
      },
      {
        description: `Удалённая работа`,
        number: `14`
      },
      {
        description: `Бизнес`,
        number: `43`,
        active: true
      }],
    preview: [
      {
        breadcrumbs: [`Дизайн`, `Удалённая работа`],
        time: {
          string: `21.03.2019, 20:33`,
          datetime: `2019-03-21T20:33`
        },
        name: `Я ничего не понял`,
        text: `Если вы сами пишете такие письма — почитайте Ильяхова. А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
        comments: 12,
        img: {
          name: `skyscraper`,
          alt: `Фотография небоскреба`
        }
      },
      {
        breadcrumbs: [`Фриланс`],
        time: {
          string: `21.03.2019, 20:33`,
          datetime: `2019-03-21T20:33`
        },
        name: `Путешествие в Голландию`,
        text: `Если вы сами пишете такие письма — почитайте Ильяхова. А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
        comments: 12,
        img: {
          name: `sea`,
          alt: `Фотография моря`
        }
      },
      {
        breadcrumbs: [`Фриланс`],
        time: {
          string: `21.03.2019, 20:33`,
          datetime: `2019-03-21T20:33`
        },
        name: `Путин подписал закон о предустановке российских приложений на смартфоны и другую электронику`,
        text: `Президент России Владимир Путин подписал закон об обязательной предустановке российского программного обеспечения на электронную технику, продаваемую в России. Документ опубликован на официальном сайте правовой информации.`,
        comments: 12
      },
      {
        breadcrumbs: [`Дизайн`, `Удалённая работа`],
        time: {
          string: `21.03.2019, 20:33`,
          datetime: `2019-03-21T20:33`
        },
        name: `Я понял, но не все`,
        text: `Если вы сами пишете такие письма — почитайте Ильяхова. А в этой заметке я расскажу про заклинание, которое от таких писем помогает.`,
        comments: 12,
        img: {
          name: `forest`,
          alt: `Фотография леса`
        }
      }
    ]
  };
  res.render(`category`, pageContent);
});

articlesRouter.get(`/edit/:id`, (req, res) => {
  // const id = req.params[`id`];
  res.render(`articles/edit`);
});

module.exports = articlesRouter;
