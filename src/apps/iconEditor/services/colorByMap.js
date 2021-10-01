// controllers
import { handlerColorChangeAction } from "$icon-editor/controllers/handlePixelChange";
import drawOnCanvas from "$icon-editor/controllers/drawOnCanvas";

// services
import getTilePosition from "$icon-editor/services/getTilePosition";

export default function colorByMap ( mapString ) {
  sessionStorage.setItem( "pixelEditor_canvasBoard", mapString );
  const allTiles = document.querySelectorAll( ".pixel-editor__canvas-tile" );
  const explodedCode = mapString.replace( /\n/g, "" ).split( "" );

  for ( let i = 0; i < explodedCode.length; i++ ) {
    if ( explodedCode[i] === "1" ) {
      handlerColorChangeAction( allTiles[i], "#000" );
      drawOnCanvas( getTilePosition( allTiles[i] ) );
    }
  }
}
