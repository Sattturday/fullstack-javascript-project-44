import app from '../index.js'
import { getRandomNumber } from '../utils/getRandomNumber.js'

const gameDescription = 'What is the result of the expression?'

const operators = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const a = getRandomNumber(50)
  const b = getRandomNumber(50)
  const operator = operators[getRandomNumber(operators.length)]

  const question = `${a} ${operator} ${b}`
  const correctAnswer = calculate(a, b, operator)

  return { question, correctAnswer }
}

export default () => app(gameDescription, generateRound)
