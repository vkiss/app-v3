import getContextMenu from "$/controllers/context-menu/functions/getContextMenu.js";

export default () => {
  const CONTEXTMENU = getContextMenu();

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

  return 6 + ( eachItemHeight * childrenRecord + eachItemHeight * childrenRecordIndex );
};
