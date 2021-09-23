import randomIntFromInterval from "./randomIntFromInterval";

/**
 * @function randomValueFromArray
 * @returns um valor aleatório de uma array
 */
export default function randomValueFromArray ( array ) {
  return array[randomIntFromInterval( 1, array.length ) - 1];
}
