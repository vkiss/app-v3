import { convertBlankSpaceToTrailingSpacesElement, registerCssVar } from "$/utils";
import promos from "$/data/promos";

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

export function createPromoBox ( promo ) {
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

  if ( promo.imgSize ) {
    registerCssVar( "promobox-image-size", `${promo.imgSize}px` );
  }
}

