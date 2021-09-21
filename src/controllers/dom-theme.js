import { addStyle, randomIntFromInterval, convertBlankSpaceToTrailingSpacesElement } from "$/utils";

const hexToRgb = ( hex ) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
  return result ? {
    r: parseInt( result[1], 16 ),
    g: parseInt( result[2], 16 ),
    b: parseInt( result[3], 16 )
  } : null;
};

const organizeDOM = () => {
  /* Criação de elementos de código HTML */
  const allElementsToHidrate = document.querySelectorAll( ".format-html-code" );

  const createHoverElement = ( el, isClosing ) => {
    const finalElement = document.createElement( "SPAN" );
    finalElement.className = `hover-${isClosing ? "after" : "before"}`;

    const openHtml = document.createTextNode( `<${isClosing ? "/" : ""}` );
    const elementHtml = document.createElement( "SPAN" );
    elementHtml.className = "html-element";
    elementHtml.innerHTML = el.nodeName.toLowerCase();
    const closeHtml = document.createTextNode( ">" );

    finalElement.appendChild( openHtml );
    finalElement.appendChild( elementHtml );

    if ( !isClosing ) {
      const renderAttributes = ["href"];
      for ( const attribute of el.attributes ) {
        if ( renderAttributes.includes( attribute.nodeName ) ) {
          const spaceElement = document.createElement( "SPAN" );
          spaceElement.className = "html-space";
          spaceElement.innerHTML=" <span>•</span>";
          finalElement.appendChild( spaceElement );

          const attributeElement = document.createElement( "SPAN" );
          attributeElement.className = "html-attribute";
          attributeElement.innerHTML = attribute.nodeName;
          finalElement.appendChild( attributeElement );

          const equalSignElement = document.createElement( "SPAN" );
          equalSignElement.className = "html-equal-sign";
          equalSignElement.innerHTML = "=";
          finalElement.appendChild( equalSignElement );

          const keyElement = document.createElement( "SPAN" );
          keyElement.className = "html-key";
          for ( let i = 0; i < 2; i++ ) {
            const aspasElement = document.createElement( "SPAN" );
            aspasElement.className = "html-aspas";
            aspasElement.innerHTML="\"";
            keyElement.appendChild( aspasElement );

            if ( i == 0 ) {
              keyElement.appendChild( document.createTextNode( attribute.value ) );
            }
          }
          finalElement.appendChild( keyElement );
        }
      }
    }

    finalElement.appendChild( closeHtml );

    return finalElement;
  };

  for ( const element of allElementsToHidrate ) {
    const innerHtmlContent = element.innerHTML;
    element.innerHTML = "";
    element.classList.remove( "format-html-code" );
    element.classList.add( "html-code" );

    const hoverBefore = createHoverElement( element );
    element.appendChild( hoverBefore );

    const innerContent = document.createElement( "SPAN" );
    innerContent.innerHTML = convertBlankSpaceToTrailingSpacesElement( innerHtmlContent.trim() );
    element.appendChild( innerContent );

    const hoverAfter = createHoverElement( element, 1 );
    element.appendChild( hoverAfter );
  }
};

export function randomizeColorPalette ( randomPalette ) {
  organizeDOM();

  const differLinkColor = randomPalette.colors.htmlAttribute; // TODO: rever fluxo de criação de cor aleatório (no fluxo anterior, [3] virava [4])
  // colors
  const COLOR = {
    ASPAS: randomPalette.colors.htmlAspas || randomPalette.colors.htmlValue,
    VALUE: randomPalette.colors.htmlValue,
    COMMENT: randomPalette.colors.htmlComment,
    COMMENT_OPENCLOSE: randomPalette.colors.htmlCommentMarkUp || randomPalette.colors.htmlComment,
  };

  addStyle( `
  html,
  aside:after {
    background-color: ${randomPalette.colors.siteBg}
  }

  .html-code {
    color: ${randomPalette.colors.plainText};
  }

  .hover-before,
  .hover-after {
    color: ${randomPalette.colors.brackets};
  }

  .html-element {
    color: ${randomPalette.colors.htmlElement};
  }

  .html-attribute {
    font-style: italic;
    color: ${randomPalette.colors.htmlAttribute};
  }

  .html-equal-sign {
    color: ${randomPalette.colors.htmlEqualSign};
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
    color: ${randomPalette.colors.plainText};
  }

  .promo-box-header {
    color: rgba(${hexToRgb( randomPalette.colors.plainText ).r},${hexToRgb( randomPalette.colors.plainText ).g},${hexToRgb( randomPalette.colors.plainText ).b},.7);
  }

  .promo-box-media$svg$rect,
  .promo-box-media$svg$path {
    fill: ${randomPalette.colors.plainText};
  }

  #footer-notes,
  #footer-notes$a {
    color: ${COLOR.COMMENT_OPENCLOSE}
  }

  #footer-notes$a:focus,
  #footer-notes$a:hover {
    color: ${randomPalette.colors.siteBg};
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
      color: ${randomPalette.colors.siteBg};
    }

    .--context-menu-open$a.footer-link:hover:not(:focus) {
      color: ${differLinkColor};
    }

    a.html-code:focus,
    a.html-code:hover {
      color: ${randomPalette.colors.siteBg};
      border-bottom-color: ${randomPalette.colors.plainText};
      background-color: ${randomPalette.colors.plainText};
    }

    .--context-menu-open$a.html-code:hover:not(:focus) {
      color: ${randomPalette.colors.plainText};
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
