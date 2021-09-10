/**
 * @function addStyles
 * @objective adicionar css minificado a tag de estilo global do DOM
 */
export default function addStyle ( styleString ) {
  const themeCssId = "themed-css";
  const styleTagOnDOM = document.getElementById( themeCssId );
  const minifiedCustomCSS = styleString.replace( /\r?\n|\r|\t| /g, "" ).replace( /\$/g, " " );

  if ( styleTagOnDOM ) {
    styleTagOnDOM.innerHTML = `${styleTagOnDOM.innerText || ""}${minifiedCustomCSS}`;
  } else {
    const styleElement = document.createElement( "style" );
    styleElement.id= themeCssId;
    styleElement.innerHTML = minifiedCustomCSS;
    document.getElementsByTagName( "head" )[0].appendChild( styleElement );
  }
}
