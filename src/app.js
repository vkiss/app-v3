// packages
import { vhUpdate } from "vh-watch";

// utils
import { randomIntFromInterval } from "$/utils";

// controllers
import { consoleController } from "$/controllers/console";
import { createPromoLoop, createPromoBox } from "$/controllers/promo-box";
import { randomizeColorPalette, injectTrailingSpaces } from "$/controllers/dom-theme";
import { createFooterNotes } from "$/controllers/footer-notes";
import { mouseTooltipController } from "$/controllers/mouse-tooltip";
import contextMenu from "$/controllers/context-menu";

// data
import themes from "./data/themes";

/**
 * Functions
 */

const init = () => {
  const promoLoop = createPromoLoop();
  const randomPromo = promoLoop[randomIntFromInterval( 0, promoLoop.length - 1 )];
  const randomPalette = themes[randomIntFromInterval( 0, themes.length - 1 )];

  randomizeColorPalette( randomPalette );
  createFooterNotes( randomPalette );
  createPromoBox( randomPromo );
  consoleController( randomPalette );
  injectTrailingSpaces();
  contextMenu( randomPalette, randomPromo );
  mouseTooltipController();
  vhUpdate();
};

init();
