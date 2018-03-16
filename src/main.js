module.exports = {
  sum: (number1, number2) => number1 + number2,
  sub: (number1, number2) => number1 - number2,
  mult: (number1, number2) => number1 * number2,
  div: (number1, number2) => (
    (number2 === 0) ? 'Não é possivel dividir por 0' : number1 / number2),
};
