/**
 * Imports
 */

import { copyToClipboard } from "$/utils";

import startApp from "$/apps/trigger/start";
import linkBlank from "$/assets/icons/external-link.svg";

// templates
import defaultMenu from "$/controllers/context-menu/templates/default";

// functions
import getContextMenu from "$/controllers/context-menu/functions/getContextMenu";

// actions
import closeMenu from "$/controllers/context-menu/actions/close";

const adjustIconPadding = ( ICONCONTAINER, DATA ) => {
  if ( DATA.iconAdjust || DATA.icon === linkBlank ) {
    ICONCONTAINER.style.padding = "0 " + ( DATA.icon === linkBlank ? 4 : DATA.iconAdjust ) + "px";
  }
};

export default ( menuData = defaultMenu ) => {
  const CONTEXTMENU = getContextMenu();
  CONTEXTMENU.innerHTML = "";

  for ( const menuItem of menuData ) {
    const item = document.createElement( menuItem.link ? "A" : "DIV" );

    item.className = "context-menu-" + ( menuItem.type === "divider" ? "hr" : "primary-item" );

    if ( menuItem.icon ) {
      const iconContainer = document.createElement( "SPAN" );
      iconContainer.className = "context-menu-icon";
      iconContainer.innerHTML = menuItem.icon;

      adjustIconPadding( iconContainer, menuItem );

      item.appendChild( iconContainer );
    }

    if ( menuItem.title ) {
      const textContainer = document.createElement( "SPAN" );
      textContainer.className = "context-menu-label";
      textContainer.appendChild( document.createTextNode( menuItem.title ) );
      item.appendChild( textContainer );
    }

    switch ( menuItem.type ) {

    case "link":
      item.setAttribute( "href", menuItem.link );
      item.setAttribute( "target", "_blank" );
      item.setAttribute( "rel", "noopener noreferrer" );
      break;

    case "copy":
      item.addEventListener( "click", () => {
        copyToClipboard( menuItem.copy );
      } );
      break;

    case "app":
      item.addEventListener( "click", () => {
        if ( menuItem.app === closeApp ) {
          closeApp();
        } else {
          startApp( menuItem.app );
        }
      } );
      break;

    case "divider":
      item.setAttribute( "data-prevent-closing-on-click", true );
      break;

    default:
      break;
    }

    if ( menuItem.itens ) {
      item.setAttribute( "data-prevent-closing-on-click", true );
      const subMenu = document.createElement( "DIV" );
      subMenu.className = "context-menu-sub-menu";

      const itensArray = menuItem.itens.sort( ( a, b ) => {
        if ( menuItem.sort === "abc" ) {
          if( a.label < b.label ) { return -1; }
          if( a.label > b.label ) { return 1; }
          return 0;
        }
        return 0;
      } );

      for ( const subMenuItem of itensArray ) {
        const isNotLink = subMenuItem.app;

        const subItem = document.createElement( isNotLink ? "SPAN" : "A" );
        subItem.className = "context-menu-secondary-item";
        if ( isNotLink ) {
          subItem.setAttribute( "role", "button" );
        } else {
          subItem.setAttribute( "href", subMenuItem.link );
          subItem.setAttribute( "target", "_blank" );
          subItem.setAttribute( "rel", "noopener noreferrer" );
        }

        if ( subMenuItem.icon ) {
          const iconContainer = document.createElement( "SPAN" );
          iconContainer.className = "context-menu-icon";
          iconContainer.innerHTML = subMenuItem.icon;

          adjustIconPadding( iconContainer, subMenuItem );

          subItem.appendChild( iconContainer );
        }

        const subItemTextContainer = document.createElement( "SPAN" );
        subItemTextContainer.className = "context-menu-label";
        subItemTextContainer.appendChild( document.createTextNode( subMenuItem.label ) );
        subItem.appendChild( subItemTextContainer );

        subItem.addEventListener( "click", () => {
          closeMenu();
        } );

        if ( subMenuItem.app ) {
          subItem.addEventListener( "click", () => {
            if ( subMenuItem.app === closeApp ) {
              closeApp();
            } else {
              startApp( subMenuItem.app );
            }
          } );
        }

        subMenu.appendChild( subItem );
      }

      item.appendChild( subMenu );

      const subMenuArrow = document.createElement( "DIV" );
      subMenuArrow.className = "context-menu-has-sub-menu-arrow";

      item.appendChild( subMenuArrow );
    }

    CONTEXTMENU.appendChild( item );
  }
};
