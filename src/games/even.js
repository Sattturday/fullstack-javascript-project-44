import app from '../index.js'
import { getRandomNumber } from '../utils/getRandomNumber.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const generateRound = () => {
  const number = getRandomNumber(100)

  const question = `Question: ${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

export default () => app(gameDescription, generateRound)
