
/**
 * -----------------------------
 * Requires
 * -----------------------------
 */

const fs = require( "fs" );
const chalk = require( "chalk" );
const { info } = console;
const path = require( "path" );

/**
 * -----------------------------
 * Directories & Files
 * -----------------------------
 */

const indexFile = path.resolve( "./", "dist/index.html" );
const firstPaintCssFile = path.resolve( "./", "dist/first-paint.css" );

/**
 * -----------------------------
 * Script
 * -----------------------------
 */

fs.readFile( indexFile, "utf8", function ( err, data ) {
  if ( err ) {
    return info( chalk.red( err ) );
  }

  fs.readFile( firstPaintCssFile, "utf8", function ( cssErr, cssData ) {
    if ( cssErr ) {
      return info( chalk.red( cssErr ) );
    }

    const newIndex = data.replace( "<link rel=\"stylesheet\" href=\"./first-paint.css\">", `<style>${ cssData.trim() }</style>` );

    fs.writeFile( indexFile, newIndex, "utf8", function ( nerr ) {
      if ( nerr ) return info( chalk.red( nerr ) );
    } );
  } );
} );
