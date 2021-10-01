import "./styles.scss";

// controllers
import generateSvg from "$icon-editor/controllers/svgGenerator";

// components
import canvasEditor from "$icon-editor/components/canvasEditor";
import previewPannel from "$icon-editor/components/previewPannel";
import toolbar from "$icon-editor/components/toolbar";

// services
import generateASCIICode from "$icon-editor/services/generateASCIICode";

const defaultIconSize = 21;

// ::
export function generatePixelSvg( iconCode, width = defaultIconSize, height = defaultIconSize ) {
  return generateSvg( { width: width, height: height }, iconCode );
}

export default function pixelEditor () {
  // init session storage
  sessionStorage.setItem( "pixelEditor_currentTool", "pen" );
  sessionStorage.setItem( "pixelEditor_config_tilesize", 15 );
  sessionStorage.setItem( "pixelEditor_config_x", defaultIconSize );
  sessionStorage.setItem( "pixelEditor_config_y", defaultIconSize );
  sessionStorage.setItem( "pixelEditor_canvasBoard", generateASCIICode( [] ) );

  const thisApp = document.createElement( "SECTION" );
  thisApp.className = "pixel-editor";

  thisApp.appendChild( toolbar() );
  thisApp.appendChild( canvasEditor() );
  thisApp.appendChild( previewPannel() );

  return {
    monitorName: "Jicon",
    element: thisApp,
  };
}
