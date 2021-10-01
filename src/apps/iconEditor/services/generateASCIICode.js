export default function generateASCIICode ( boardMap ) {
  const boardWidth = sessionStorage.getItem( "pixelEditor_config_x" );
  const boardHeight = sessionStorage.getItem( "pixelEditor_config_y" );

  let asciiCode = "";

  for ( let line = 0; line < boardHeight; line++ ) {
    const currentLine = line + 1;

    for ( let column = 0; column < boardWidth; column++ ) {
      const currentColumn = column + 1;

      let shouldPaint = false;

      for ( const filledPixel of boardMap ) {
        if ( filledPixel.y === currentLine && filledPixel.x === currentColumn ) {
          shouldPaint = true;
        }
      }

      asciiCode += shouldPaint ? "1" : "0";
    }
    asciiCode += "\n";
  }

  return asciiCode;
}
