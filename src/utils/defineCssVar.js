const registerFunction = ( varName, varValue ) => {
  document.documentElement.style.setProperty( "--" + varName, varValue );
};

/**
 * @function registerCssVar
 */
export default function registerCssVar ( varName, varValue = null ) {
  if ( typeof( varName ) === "string" ) {
    registerFunction( varName, varValue );
    return;
  }

  for ( const cssVariable of varName ) {
    registerCssVar( cssVariable.name, cssVariable.value );
  }
}
