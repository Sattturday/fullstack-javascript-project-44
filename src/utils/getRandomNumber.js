// Math.random() is acceptable here because cryptographic security is not required
export const getRandomNumber = (max) => {
  const randomNumber = Math.floor(Math.random() * max)

  return randomNumber
}
