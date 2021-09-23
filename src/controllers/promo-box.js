import { convertBlankSpaceToTrailingSpacesElement, registerCssVar } from "$/utils";
import promos from "$/data/promos";

// helper
const hexToRgb = ( hex ) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
  return result ? {
    r: parseInt( result[1], 16 ),
    g: parseInt( result[2], 16 ),
    b: parseInt( result[3], 16 )
  } : null;
};

export function createPromoLoop () {

  let returnLoop = [];

  for ( const promo of promos ) {
    const numberToRepeat = promo.relevance || 1;

    for ( let o = 0; o < numberToRepeat; o++ ) {
      returnLoop.push( promo );
    }
  }

  return returnLoop;
}

export function createPromoBox ( promo, theme ) {
  const promoBoxEl = document.getElementById( "promo-box" );

  promoBoxEl.setAttribute( "href", promo.href );
  promoBoxEl.setAttribute( "target", promo.target );
  if ( promo.target === "_blank" ) {
    promoBoxEl.setAttribute( "rel", "noopener noreferrer" );
  }
  promoBoxEl.className = "promo-box";

  promoBoxEl.innerHTML = `
    <header class="promo-box-header">${promo.hat}</header>
    <div class="promo-box-body">
      <figure class="promo-box-media">
        ${promo.img}
      </figure>
      <div class="promo-box-ad">
        <p>${convertBlankSpaceToTrailingSpacesElement( promo.text )}<span class=\"html-space\"> <span>•</span></span><strong>${convertBlankSpaceToTrailingSpacesElement( promo.callout )}</strong></p>
      </div>
    </div>
  `;

  registerCssVar( "promobox-header-color", `rgba(${hexToRgb( theme.colors.plainText ).r},${hexToRgb( theme.colors.plainText ).g},${hexToRgb( theme.colors.plainText ).b},.7)` );

  if ( promo.imgSize ) {
    registerCssVar( "promobox-image-size", `${promo.imgSize}px` );
  }
}

