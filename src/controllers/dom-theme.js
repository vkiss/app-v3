import { addStyle, convertBlankSpaceToTrailingSpacesElement, randomValueFromArray } from "$/utils";

// helper
const hexToRgb = ( hex ) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
  return result ? {
    r: parseInt( result[1], 16 ),
    g: parseInt( result[2], 16 ),
    b: parseInt( result[3], 16 )
  } : null;
};

// ::
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

export function applyDomTheme ( randomPalette ) {
  organizeDOM();

  // define css variables
  const cssVariables = [
    {
      "name": "theme-plain-text",
      "value": randomPalette.colors.plainText
    },
    {
      "name": "theme-site-bg",
      "value": randomPalette.colors.siteBg
    },
    {
      "name": "theme-html-brackets",
      "value": randomPalette.colors.brackets
    },
    {
      "name": "theme-html-element",
      "value": randomPalette.colors.htmlElement
    },
    {
      "name": "theme-html-attribute",
      "value": randomPalette.colors.htmlAttribute
    },
    {
      "name": "theme-html-equalsign",
      "value": randomPalette.colors.htmlEqualSign
    },
    {
      "name": "theme-html-aspas",
      "value": randomPalette.colors.htmlAspas || randomPalette.colors.htmlKey
    },
    {
      "name": "theme-html-key",
      "value": randomPalette.colors.htmlKey
    },
    {
      "name": "theme-html-key",
      "value": randomPalette.colors.htmlKey
    },
    {
      "name": "theme-html-comment",
      "value": randomPalette.colors.htmlComment
    },
    {
      "name": "theme-html-comment-markup",
      "value": randomPalette.colors.htmlCommentMarkUp || randomPalette.colors.htmlComment
    },
    {
      "name": "theme-color-alternate",
      "value": randomValueFromArray( [
        randomPalette.colors.htmlElement,
        randomPalette.colors.htmlAttribute,
      ] )
    },
  ];

  for ( const cssVariable of cssVariables ) {
    document.documentElement.style.setProperty( "--" + cssVariable.name, cssVariable.value );
  }

  addStyle( `.promo-box-header {
    color: rgba(${hexToRgb( randomPalette.colors.plainText ).r},${hexToRgb( randomPalette.colors.plainText ).g},${hexToRgb( randomPalette.colors.plainText ).b},.7);
  }` );
}

export function injectTrailingSpaces () {
  const elementsToInjectTrailingSpace = document.querySelectorAll( ".js-inject-trailing-space" );

  for ( const element of elementsToInjectTrailingSpace ) {
    element.innerHTML = convertBlankSpaceToTrailingSpacesElement( element.innerText.replace( "<!--", "&lt;!--" ) );
    element.classList.remove( "js-inject-trailing-space" );
  }
}
