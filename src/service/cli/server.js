'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const fs = require(`fs`).promises;
const {MessageColor} = require(`../../utils`);
const DEFAULT_PORT = 3000;
const filePath = `mocks.json`;
const app = express();

const sendResponse = (res, message) => {
  const template = `
    <!Doctype html>
      <html lang="ru">
      <head>
        <title>With love from Node</title>
      </head>
      <body>${message}</body>
    </html>`.trim();
  res.send(template);
};

module.exports = {
  name: `--server`,
  async run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;
    app.listen(port);
    app.use(`/`, async (err, req, res, next) => {
      if (err) {
        return console.error(chalk[MessageColor.error]`Ошибка при создании сервера`, err);
      } else {
        console.info(chalk[MessageColor.success](`Ожидаю соединений на ${port}`));
        const notFoundMessageText = `Not found`;
        try {
          const content = await fs.readFile(filePath);
          const mocks = JSON.parse(content);
          const message = mocks.map((post) => `<li>${post.title}</li>`).join(``);
          sendResponse(res, `<ul>${message}</ul>`);
        } catch (e) {
          res.send(notFoundMessageText);
        }
      }
    });
  }
};
