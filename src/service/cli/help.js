'use strict';
const chalk = require(`chalk`);
const {MessageColor} = require(`../../utils.js`);

module.exports = {
  name: `--help`,
  run() {
    console.info(chalk[MessageColor.help](`
      Программа запускает http-сервер и формирует файл с данными для API.
    
    Гайд:
    service.js <command>
    Команды:
    --version:            выводит номер версии
    --help:               печатает этот текст
    --generate <count>    формирует файл mocks.json
    `));
  }
};
