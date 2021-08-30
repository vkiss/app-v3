import { addStyle, randomIntFromInterval, convertBlankSpaceToTrailingSpacesElement } from "../utils";

const hexToRgb = ( hex ) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
  return result ? {
    r: parseInt( result[1], 16 ),
    g: parseInt( result[2], 16 ),
    b: parseInt( result[3], 16 )
  } : null;
};

const organizeDOM = () => {
  /** Envolver aspas em <span> e incluir classe para tematizar */
  const allKeyElements = document.querySelectorAll( ".html-key" );

  for ( const keyElement of allKeyElements ) {
    const value = keyElement.innerText.replace( /"/g, "" );
    const aspasSpan = "<span class=\"html-aspas\">\"</span>";
    keyElement.innerHTML = aspasSpan + value + aspasSpan;
  }
};

export function randomizeColorPalette ( randomPalette ) {
  organizeDOM();
  const filterResult = ( number ) => { return ( number === 3 ? 4 : number ); };
  const randomColor = randomPalette.colors[filterResult( randomIntFromInterval( 1, 3 ) )];
  const differLinkColor = typeof( randomColor ) === "string" ? randomColor : randomColor[0];
  // colors
  const COLOR = {
    ASPAS: typeof( randomPalette.colors[4] ) === "string" ? randomPalette.colors[4] : randomPalette.colors[4][1],
    VALUE: typeof( randomPalette.colors[4] ) === "string" ? randomPalette.colors[4] : randomPalette.colors[4][0],
    COMMENT: typeof( randomPalette.colors[5] ) === "string" ? randomPalette.colors[5] : randomPalette.colors[5][1],
    COMMENT_OPENCLOSE: typeof( randomPalette.colors[5] ) === "string" ? randomPalette.colors[5] : randomPalette.colors[5][0],
  };

  addStyle( `
  html,
  aside:after {
    background-color: ${randomPalette.colors[6]}
  }

  .html-code {
    color: ${randomPalette.colors[7]};
  }

  .hover-before,
  .hover-after {
    color: ${randomPalette.colors[0]};
  }

  .html-element {
    color: ${randomPalette.colors[1]};
  }

  .html-attribute {
    font-style: italic;
    color: ${randomPalette.colors[2]};
  }

  .html-equal-sign {
    color: ${randomPalette.colors[3]};
  }

  .html-key {
    color: ${COLOR.VALUE};
  }

  .html-aspas {
    color: ${COLOR.ASPAS};
  }

  .html-comment {
    color: ${COLOR.COMMENT};
  }

  .html-comment$span {
    color: ${COLOR.COMMENT_OPENCLOSE};
  }

  .promo-box-ad {
    color: ${randomPalette.colors[7]};
  }

  .promo-box-header {
    color: rgba(${hexToRgb( randomPalette.colors[7] ).r},${hexToRgb( randomPalette.colors[7] ).g},${hexToRgb( randomPalette.colors[7] ).b},.7);
  }

  .promo-box-media$svg$rect,
  .promo-box-media$svg$path {
    fill: ${randomPalette.colors[7]};
  }

  #footer-notes,
  #footer-notes$a {
    color: ${COLOR.COMMENT_OPENCLOSE}
  }

  #footer-notes$a:focus,
  #footer-notes$a:hover {
    color: ${randomPalette.colors[6]};
    border-bottom-color: ${COLOR.COMMENT_OPENCLOSE};
    background-color: ${COLOR.COMMENT_OPENCLOSE};
  }

  @media$screen$and$(max-width:$899px) {
    a {
      color: ${COLOR.ASPAS};
    }

    a.mobile-cta {
      color: ${differLinkColor};
    }
  }

  @media$screen$and$(min-width:$900px) {
    a {
      color: ${differLinkColor};
    }

    a.footer-link:focus,
    a.footer-link:hover {
      border-bottom-color: ${differLinkColor};
      background-color: ${differLinkColor};
      color: ${randomPalette.colors[6]};
    }

    .--context-menu-open$a.footer-link:hover:not(:focus) {
      color: ${differLinkColor};
    }

    a.html-code:focus,
    a.html-code:hover {
      color: ${randomPalette.colors[6]};
      border-bottom-color: ${randomPalette.colors[7]};
      background-color: ${randomPalette.colors[7]};
    }

    .--context-menu-open$a.html-code:hover:not(:focus) {
      color: ${randomPalette.colors[7]};
    }
  }
  ` );
}

export function injectTrailingSpaces () {
  const elementsToInjectTrailingSpace = document.querySelectorAll( ".js-inject-trailing-space" );

  for ( const element of elementsToInjectTrailingSpace ) {
    element.innerHTML = convertBlankSpaceToTrailingSpacesElement( element.innerText.replace( "<!--", "&lt;!--" ) );
    element.classList.remove( "js-inject-trailing-space" );
  }
}
