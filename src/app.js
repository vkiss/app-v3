// packages
import { initAndWatchVh } from "vh-watch";

// utils
import { randomIntFromInterval } from "$/utils";

// controllers
import { consoleController } from "$/controllers/console";
import { createPromoLoop, createPromoBox } from "$/controllers/promo-box";
import { applyDomTheme, injectTrailingSpaces } from "$/controllers/dom-theme";
import { createFooterNotes } from "$/controllers/footer-notes";
import { mouseTooltipController } from "$/controllers/mouse-tooltip";
import contextMenu from "$/controllers/context-menu";
import favicon from "$/controllers/favicon.js";

// data
import themes from "$/data/themes";

/**
 * Functions
 */

const init = () => {
  const promoLoop = createPromoLoop();
  const promo = promoLoop[randomIntFromInterval( 0, promoLoop.length - 1 )];
  const theme = themes[randomIntFromInterval( 0, themes.length - 1 )];

  applyDomTheme( theme );
  favicon( theme );
  createFooterNotes( theme );
  createPromoBox( promo, theme );
  consoleController( theme );
  injectTrailingSpaces();
  contextMenu( promo );
  mouseTooltipController();
  initAndWatchVh();

  if ( "serviceWorker" in navigator ) {
    window.addEventListener( "load", function() {
      navigator.serviceWorker
        .register( "/service-worker.js" )
        .then( res => console.log( "service worker registered" ) )
        .catch( err => console.log( "service worker not registered", err ) );
    } );
  }
};

init();
