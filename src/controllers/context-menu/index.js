/**
 * Imports
 */

import { scanNodeDimension, isMobileDevice } from "$/utils";

// actions
import closeMenu from "$/controllers/context-menu/actions/close";
import resolveMenuTemplate from "./functions/templateManager";

/**
  * Init
  */

const CONTEXTMENU = document.createElement( "DIV" );
CONTEXTMENU.className = "context-menu";

export default function contextMenuController ( randomPromo ) {
  if ( isMobileDevice() ) { return; }

  document.body.appendChild( CONTEXTMENU );

  window.addEventListener( "contextmenu", ( event ) => {
    // Descomente a linha abaixo para debugar second-apps
    // if ( document.body.classList.contains( "--run-on-bg-finish" ) ) { return; }

    event.preventDefault();

    document.body.classList.add( "--context-menu-open" );

    resolveMenuTemplate( event, randomPromo );

    // Calculate Max Context Menu Size (including sub itens)
    const allItensWithSubItens = CONTEXTMENU.querySelectorAll( ".context-menu-primary-item" );

    let childrenRecord = 0;
    let childrenRecordIndex = 0;

    for ( let i = 0; i < allItensWithSubItens.length ; i++ ) {
      if ( allItensWithSubItens[i].querySelector( ".context-menu-sub-menu" ) !== null ) {
        const noOfChildren = allItensWithSubItens[i].querySelector( ".context-menu-sub-menu" ).children.length;

        if ( noOfChildren > childrenRecord ) {
          childrenRecord = noOfChildren;
          childrenRecordIndex = i + 1;
        }
      }
    }

    const eachItemHeight = 27;

    const greatestHeight = 6 + ( eachItemHeight * childrenRecord + eachItemHeight * childrenRecordIndex );

    if ( event.button == 2 ) {
      // Posicionamento do menu
      CONTEXTMENU.removeAttribute( "style" );
      CONTEXTMENU.classList.toggle( "--display" );

      const scanResult = scanNodeDimension( event, CONTEXTMENU, greatestHeight );

      CONTEXTMENU.style.left = scanResult.left + "px";
      CONTEXTMENU.style.top = scanResult.top + "px";
    }
  } );

  window.addEventListener( "click", ( event ) => {
    if (
      event.target.dataset.preventClosingOnClick // se o elemento declaradamente não deve fechar o context menu (ex.: divider)
      || event.target === CONTEXTMENU // se o elemento é o próprio context menu
      || event.target.classList.contains( "context-menu-sub-menu" ) // se o elemento clicado é um subitem do context menu
    ) { return; }
    if ( document.body.classList.contains( "--context-menu-open" ) ) {
      if ( !event.path.includes( CONTEXTMENU ) ) {
        event.preventDefault();
      }

      closeMenu();
      document.body.classList.remove( "--context-menu-open" );
    }
  } );
}
