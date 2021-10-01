// controllers
import generateSvg from "$icon-editor/controllers/svgGenerator";

export default function getCanvasSize () {
  const svgContainer = document.querySelector( ".svg-element-container" );
  const svgElement = svgContainer.querySelector( "svg" );

  svgContainer.removeChild( svgElement );
  svgContainer.appendChild( generateSvg() );
}
