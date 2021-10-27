import createContextMenu from "$/controllers/context-menu/functions/create";

// templates
import emailMenu from "$/controllers/context-menu/templates/email";
import telegramMenu from "$/controllers/context-menu/templates/telegram";
import regularLinkMenu from "$/controllers/context-menu/templates/regularLink";

// apps
import closeApp from "$/apps/trigger/close";
// import pixelEditor from "$/apps/pixelEditor";

// assets: icons
import closeIcon from "$/assets/icons/close.svg";

export default ( event, randomPromo ) => {
  if ( event.path.includes( document.getElementById( "email-link-desktop" ) ) ) {
    createContextMenu( emailMenu );
  } else if ( event.path.includes( document.getElementById( "telegram-link-desktop" ) ) ) {
    createContextMenu( telegramMenu );
  } else if ( event.path.includes( document.getElementById( "promo-box" ) ) ) {
    createContextMenu( [
      {
        "icon": randomPromo.img,
        "title": `ir para ${randomPromo.title.toLowerCase()}`,
        "link": randomPromo.href
      }
    ] );
  } else if ( event.target.nodeName === "A" ) {
    createContextMenu( regularLinkMenu( event.target.href ) );
  } else {
    if ( document.body.classList.contains( "--run-on-bg-finish" ) ) {
      createContextMenu( [
        {
          "icon": closeIcon,
          "iconAdjust": 2,
          "title": "fechar aplicativo",
          "app": closeApp
        },
      ] );
    } else {
      createContextMenu();
    }
  }
};
