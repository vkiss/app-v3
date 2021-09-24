import { convertBlankSpaceToTrailingSpacesElement, randomValueFromArray, defineCssVar } from "$/utils";

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

export function applyDomTheme ( theme ) {
  organizeDOM();

  defineCssVar( [
    {
      "name": "theme-plain-text",
      "value": theme.colors.plainText
    },
    {
      "name": "theme-site-bg",
      "value": theme.colors.siteBg
    },
    {
      "name": "theme-html-brackets",
      "value": theme.colors.brackets
    },
    {
      "name": "theme-html-element",
      "value": theme.colors.htmlElement
    },
    {
      "name": "theme-html-attribute",
      "value": theme.colors.htmlAttribute
    },
    {
      "name": "theme-html-equalsign",
      "value": theme.colors.htmlEqualSign
    },
    {
      "name": "theme-html-aspas",
      "value": theme.colors.htmlAspas || theme.colors.htmlKey
    },
    {
      "name": "theme-html-key",
      "value": theme.colors.htmlKey
    },
    {
      "name": "theme-html-key",
      "value": theme.colors.htmlKey
    },
    {
      "name": "theme-html-comment",
      "value": theme.colors.htmlComment
    },
    {
      "name": "theme-html-comment-markup",
      "value": theme.colors.htmlCommentMarkUp || theme.colors.htmlComment
    },
    {
      "name": "theme-color-alternate",
      "value": randomValueFromArray( [
        theme.colors.htmlElement,
        theme.colors.htmlAttribute,
      ] )
    },
  ] );
}

export function injectTrailingSpaces () {
  const elementsToInjectTrailingSpace = document.querySelectorAll( ".js-inject-trailing-space" );

  for ( const element of elementsToInjectTrailingSpace ) {
    element.innerHTML = convertBlankSpaceToTrailingSpacesElement( element.innerText.replace( "<!--", "&lt;!--" ) );
    element.classList.remove( "js-inject-trailing-space" );
  }
}
