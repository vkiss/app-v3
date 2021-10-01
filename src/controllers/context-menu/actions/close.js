import getContextMenu from "$/controllers/context-menu/functions/getContextMenu.js";

export default () => {
  const CONTEXTMENU = getContextMenu();

  if ( CONTEXTMENU.classList.contains( "--display" ) ) {
    CONTEXTMENU.classList.remove( "--display" );
  }
};
