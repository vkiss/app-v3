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

const serviceWorkerFile = path.resolve( "./", "src/service-worker.js" );

/**
   * -----------------------------
   * Script
   * -----------------------------
   */

fs.readFile( serviceWorkerFile, "utf8", function ( err,data ) {
  if ( err ) {
    return info( chalk.red( err ) );
  }

  const result = data.replace( /const cacheVersion = "(.)*"/g, `const cacheVersion = "${packageFile.version}"` );

  fs.writeFile( serviceWorkerFile, result, "utf8", function ( nerr ) {
    if ( nerr ) return info( chalk.red( nerr ) );

    info( chalk.gray( "# src/service-worker.js" ) );
    info( chalk.gray( "const cacheVersion = " ) + chalk.green( `"${packageFile.version}"` ) );
    info( chalk.gray( "" ) );
  } );
} );

