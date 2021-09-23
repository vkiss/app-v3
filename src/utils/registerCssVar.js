const registerFunction = ( varName, varValue ) => {
  console.log( varName, varValue );
  document.documentElement.style.setProperty( "--" + varName, varValue );
};

/**
 * @function registerCssVar
 */
export default function registerCssVar ( varName, varValue = null ) {
  console.log( typeof( varName ) );
  registerFunction( varName, varValue );
}
