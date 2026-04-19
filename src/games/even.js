import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => num % 2 === 0

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const runEvenGame = () => {
  runGame(description, generateRound)
}

export default runEvenGame
