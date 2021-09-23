/**
 * @function randomIntFromInterval
 * @returns um valor aleatório no intervalo de dois números
 * ! não existe tratamento caso os parâmetros recebidos não sejam type number
 */
export default function randomIntFromInterval ( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
