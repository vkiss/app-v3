// controllers
import handlePixelChange from "$icon-editor/controllers/handlePixelChange";
import updateCanvas from "$icon-editor/controllers/canvasController";

const canvasClick = ( event ) => {
  const that = event.target;

  if ( that.classList.contains( "pixel-editor__canvas-tile" ) ) {
    handlePixelChange( that );
  }
};

export default function canvasEditor () {
  const container = document.createElement( "DIV" );
  container.className = "pixel-editor__canvas";

  container.addEventListener( "click", canvasClick );

  let isDragging;

  const downListener = () => {
    isDragging = true;
  };
  container.addEventListener( "mousedown", downListener );

  const moveListener = ( event ) => {
    if ( isDragging ) {
      handlePixelChange( event.path[0], true );
    }
  };
  container.addEventListener( "mousemove", moveListener );

  const upListener = () => {
    isDragging = false;
  };
  container.addEventListener( "mouseup", upListener );

  updateCanvas( container );

  return container;
}
