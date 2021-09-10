/**
 * @function deleteElement
 * @objective deleta um elemento do DOM
 */
export default function deleteElement ( el ) {
  el.parentElement.removeChild( el );
}
