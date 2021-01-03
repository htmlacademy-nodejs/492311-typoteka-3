'use strict';

const fs = require(`fs`);
const chalk = require(`chalk`);
const {getRandomInt, shuffle, MessageColor} = require(`../../utils.js`);
const {ExitCode} = require(`../../constants.js`);

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1001;
const FILE_NAME = `mocks.json`;
const MAX_MONTH_AGO = 3;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTES = 60;

const TITLES = [
  `Ёлки. История деревьев`,
  `Как перестать беспокоиться и начать жить`,
  `Как достигнуть успеха не вставая с кресла`,
  `Обзор новейшего смартфона`,
  `Лучшие рок-музыканты 20-века`,
  `Как начать программировать`,
  `Учим HTML и CSS`,
  `Что такое золотое сечение`,
  `Как собрать камни бесконечности`,
  `Борьба с прокрастинацией`,
  `Рок — это протест`,
  `Самый лучший музыкальный альбом этого года`,
];

const SENTENCES = [
  `Ёлки — это не просто красивое дерево. Это прочная древесина.`,
  `Первая большая ёлка была установлена только в 1938 году.`,
  `Вы можете достичь всего. Стоит только немного постараться и запастись книгами.`,
  `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
  `Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
  `Собрать камни бесконечности легко, если вы прирожденный герой.`,
  `Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.`,
  `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
  `Программировать не настолько сложно, как об этом говорят.`,
  `Простые ежедневные упражнения помогут достичь успеха.`,
  `Это один из лучших рок-музыкантов.`,
  `Он написал больше 30 хитов.`,
  `Из под его пера вышло 8 платиновых альбомов.`,
  `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
  `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?`,
  `Достичь успеха помогут ежедневные повторения.`,
  `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
  `Как начать действовать? Для начала просто соберитесь.`,
  `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
];

const CATEGORIES = [
  `Деревья`,
  `За жизнь`,
  `Без рамки`,
  `Разное`,
  `IT`,
  `Музыка`,
  `Кино`,
  `Программирование`,
  `Железо`,
];

const getMockCategories = () => {
  let newArr = [...CATEGORIES];
  const ITEMS_TO_REMOVE = getRandomInt(1, newArr.length);
  for (let i = 1; i < ITEMS_TO_REMOVE; i++) {
    newArr.splice(getRandomInt(0, newArr.length), 1);
  }
  return newArr;
};

const generatePosts = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    createdDate: generateDate(getRandomInt(0, MAX_MONTH_AGO)),
    announce: shuffle(SENTENCES).slice(0, 5).join(` `),
    fullText: shuffle(SENTENCES).slice(0, getRandomInt(1, SENTENCES.length - 1)).join(` `),
    category: getMockCategories()
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

const isArgumentNumeric = (args) => {
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
      isArgumentNumeric(args);
      isNegativeNumber(args);
    }
    const [count] = args;
    const countPosts = Number.parseInt(count, 10) || DEFAULT_COUNT;
    isAmountExceed(count);
    const content = JSON.stringify(generatePosts(countPosts));
    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk[MessageColor.success](`Operation success. File created.`));
    } catch (err) {
      console.error(chalk[MessageColor.error](`Can't write data to file...`));
    }

  }
};
