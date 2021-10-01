// controllers
import drawOnCanvas from "./drawOnCanvas";

// services
import getTilePosition from "$icon-editor/services/getTilePosition";
import generateASCIICode from "$icon-editor/services/generateASCIICode";
import translateASCIICode from "$icon-editor/services/translateASCIICode";
import updateSvgPreview from "$icon-editor/services/updateSvgPreview";

const encodeMap = ( svgArray ) => {
  return generateASCIICode( svgArray ).trim();
};

export function handlerColorChangeAction ( tile, color ) {
  tile.style.backgroundColor = color;
  tile.setAttribute( "data-color", color );
}

// ::
export default function handlePixelChange ( tile, forcePaint = false ) {
  const isTainted = forcePaint ? false : tile?.dataset.color == "#000";
  const tileCoordinates = getTilePosition( tile );

  drawOnCanvas( tileCoordinates, isTainted );

  const arrayBoard = translateASCIICode( sessionStorage.getItem( "pixelEditor_canvasBoard" ) ).map;

  if ( isTainted ) {
    // remove from virtual board
    let indexToFind = 0;
    for ( let i = 0; i < arrayBoard.length; i++ ) {
      if ( arrayBoard[i].x === tileCoordinates.x && arrayBoard[i].y === tileCoordinates.y ) {
        indexToFind = i;
      }
    }
    arrayBoard.splice( indexToFind, 1 );

    handlerColorChangeAction( tile, "#FFF" );
  } else {
    // push to virtual board
    arrayBoard.push( tileCoordinates );

    handlerColorChangeAction( tile, "#000" );
  }

  sessionStorage.setItem( "pixelEditor_canvasBoard", encodeMap( arrayBoard ) );

  updateSvgPreview();

  // update text area export value
  document.getElementById( "textarea-export-value" ).value = encodeMap( arrayBoard );
}
