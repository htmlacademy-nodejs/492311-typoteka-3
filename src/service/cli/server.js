'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const {MessageColor} = require(`../../utils`);
const fs = require(`fs`).promises;

const app = express();

const DEFAULT_PORT = 3000;
const filePath = `mocks.json`;

const getFileData = async (path) => {
  try {
    const content = await fs.readFile(path);
    return JSON.parse(content);
  } catch (error) {
    return [];
  }
};

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

const onClientConnect = async (res) => {
  let mocks = await getFileData(filePath);
  const message = mocks.map((post) => `<li>${post.title}</li>`).join(``);
  sendResponse(res, `<ul>${message}</ul>`);
};

module.exports = {
  name: `--server`,
  async run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;
    app.use(`/posts`, (req, res) => {
      onClientConnect(res, port);
    });

    app.listen(port, () => {
      console.info(chalk[MessageColor.success](`Ожидаю соединений на ${port}`));
    });
  }
};
