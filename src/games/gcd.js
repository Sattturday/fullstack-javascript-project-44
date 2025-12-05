import app from '../index.js'
import { getRandomNumber } from '../utils/getRandomNumber.js'

const gameDescription = 'Find the greatest common divisor of given numbers.'

const calculateGcd = (firstNumber, secondNumber) => {
  let a = firstNumber
  let b = secondNumber

  while (b !== 0) {
    const remainder = a % b
    a = b
    b = remainder
  }

  return a
}

const generateRound = () => {
  const firstNumber = getRandomNumber(100)
  const secondNumber = getRandomNumber(100)

  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = calculateGcd(firstNumber, secondNumber)

  return { question, correctAnswer }
}

export default () => app(gameDescription, generateRound)
