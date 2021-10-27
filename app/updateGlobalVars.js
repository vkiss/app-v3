/**
 * -----------------------------
 * Requires
 * -----------------------------
 */

const fs = require( "fs" );
const chalk = require( "chalk" );
const { info } = console;
const path = require( "path" );
const packageFile = require( "../package.json" );

/**
  * -----------------------------
  * Directories & Files
  * -----------------------------
  */

const globalVarsFile = path.resolve( "./", "src/data/global-vars.js" );

/**
  * -----------------------------
  * Script
  * -----------------------------
  */

fs.readFile( globalVarsFile, "utf8", function ( err,data ) {
  if ( err ) {
    return info( chalk.red( err ) );
  }

  const result = data.replace( /^( |)*\"packageVersion\"\: \"(\d).(\d).(\d).\"\,/m, `  "packageVersion": "${packageFile.version}",` );

  info( chalk.gray( "# src/data/global-vars.js" ) );
  info( chalk.gray( "{" ) );
  info( chalk.gray( "  ..." ) );
  info( chalk.gray( "  \"packageVersion\": " ) + chalk.green( `"${packageFile.version}"` ) );
  info( chalk.gray( "}" ) );



  fs.writeFile( globalVarsFile, result, "utf8", function ( nerr ) {
    if ( nerr ) return info( chalk.red( nerr ) );
  } );
} );
