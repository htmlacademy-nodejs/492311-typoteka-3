'use strict';

const MessageColor = {
  error: `red`,
  success: `green`,
  info: `blue`,
  help: `grey`
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  getRandomInt,
  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const randomPosition = Math.floor(Math.random() * i);
      [arr[i], arr[randomPosition]] = [arr[randomPosition], arr[i]];
    }
    return arr;
  },
  MessageColor
};


