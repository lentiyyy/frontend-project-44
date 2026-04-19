import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGcd(num1, num2));
  return [question, correctAnswer];
};

const runGcdGame = () => {
  runGame(description, generateRound);
};

export default runGcdGame;
