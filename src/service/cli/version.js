'use strict';
const chalk = require(`chalk`);
const packageJsonFile = require(`../../../package.json`);
const {MessageColor} = require(`../../utils.js`);

module.exports = {
  name: `--version`,
  run() {
    const version = packageJsonFile.version;
    console.info(chalk[MessageColor.info](version));
  }
};
