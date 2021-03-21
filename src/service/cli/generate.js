'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {getRandomInt, shuffle, MessageColor} = require(`../../utils.js`);
const {ExitCode} = require(`../../constants.js`);
const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1001;
const FILE_NAME = `mocks.json`;
const MAX_MONTH_AGO = 3;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTES = 60;

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (e) {
    console.error(e);
    process.exit(ExitCode.error);
  }
};

const getMockCategories = (categories) => {
  let newArr = [...categories];
  const ITEMS_TO_REMOVE = getRandomInt(1, newArr.length);
  for (let i = 1; i < ITEMS_TO_REMOVE; i++) {
    newArr.splice(getRandomInt(0, newArr.length), 1);
  }
  return newArr;
};

const generatePosts = (count, titles, categories, sentences) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 1)],
    createdDate: generateDate(getRandomInt(0, MAX_MONTH_AGO)),
    announce: shuffle(sentences).slice(0, 5).join(` `),
    fullText: shuffle(sentences).slice(0, getRandomInt(1, sentences.length - 1)).join(` `),
    category: getMockCategories(categories)
  })));

const generateDate = (monthAgo) => {
  const date = new Date();
  date.setMonth(date.getMonth() - monthAgo);
  const daysInMonth = (dateToCount) => {
    return new Date(dateToCount.getFullYear(), dateToCount.getMonth(), 0).getDate();
  };
  date.setDate(getRandomInt(1, daysInMonth(date)));
  date.setHours(getRandomInt(1, HOURS_IN_DAY));
  date.setMinutes(getRandomInt(1, MINUTES_IN_HOUR));
  date.setSeconds(getRandomInt(1, SECONDS_IN_MINUTES));
  return date.toISOString().replace(`T`, ` `).slice(0, date.toISOString().indexOf(`.`));
};

const isMultiplyElementsInArray = (arr) => {
  if (arr.length > 1) {
    console.log(chalk[MessageColor.error](`Можно ввести только 1 аргумент`));
    process.exit(ExitCode.error);
  }
};

const isArgumentDigit = (args) => {
  if (!args[0].match(/^-?[0-9]\d*(\.\d+)?$/)) {
    console.log(chalk[MessageColor.error](`Аргумент должен быть числом`));
    process.exit(ExitCode.error);
  }
};

const isNegativeNumber = (args) => {
  if (args[0] < 0) {
    console.log(chalk[MessageColor.error](`Аргумент должен быть больше нуля`));
    process.exit(ExitCode.error);
  }
};

const isAmountExceed = (amount) => {
  if (amount > MAX_COUNT) {
    console.log(chalk[MessageColor.error](`Не больше ${MAX_COUNT} объявлений`));
    process.exit(ExitCode.error);
  }
};

module.exports = {
  name: `--generate`,
  async run(args) {
    if (args.length) {
      isMultiplyElementsInArray(args);
      isArgumentDigit(args);
      isNegativeNumber(args);
    }
    const [count] = args;
    const countPosts = Number.parseInt(count, 10) || DEFAULT_COUNT;
    isAmountExceed(count);
    const titles = await readContent(FILE_TITLES_PATH);
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);
    const content = JSON.stringify(generatePosts(countPosts, titles, categories, sentences));
    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk[MessageColor.success](`Operation success. File created.`));
    } catch (err) {
      console.error(chalk[MessageColor.error](`Can't write data to file...`));
    }
  }
};
